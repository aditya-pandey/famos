import { createContext, useState, useEffect } from 'react';
import { images } from '../data/site.js';

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // This maps the slugs from your Google Sheet to your local images
  const imageMap = {
    'why-famos': images.connection,
    'for-parents': images.parent,
    'for-teens': images.teen,
    'for-counsellors': images.counsellor,
    'about-us': images.family,
    'schools': images.school,
  };

  useEffect(() => {
    // ⚠️ PASTE YOUR GOOGLE SCRIPT URL BELOW ⚠️
    const API_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnRBDC929yTDM6KmzOzcHpb5YmSS4h9nG5pNxPiwqoPaLPyjklYmIjbTTr_O2ijg7rRNWbCR_Ui0AaZhN91lmfwoodLMxn0miDPOlMaIDmJC1SxhSfypkIoaS_1ppF9VvgwCDQZ8SQhGL8bme7EbK0OUZH7n0q9ZRtvfAo7SmWWot1vhHpcpTOpQsZf03lyamnf33oOuSblZ_Bnwl5B1uYhSPYIdyyQQhKTRvN-W6KHy4N3Euh-7zLy94OqC7ZVlCX2LsEY9QhRiFdPesJkemqh4GqAwuw&lib=MCFRKVgUg9kIBbXqfkUM8lAL0bBO3PCUx';

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        
        // 1. Format the Pages array
        const formattedPages = data.pages.map(page => ({
          slug: page.Slug,
          path: `/${page.Slug}`,
          eyebrow: page.Eyebrow,
          title: page.Title,
          description: page.Description,
          cta: page.CTA,
          image: imageMap[page.Slug], // Attaches the local image from site.js
          alt: page.Title, // Uses title as a fallback alt tag
          sections: [
            [page.Sec1_Title, page.Sec1_Text],
            [page.Sec2_Title, page.Sec2_Text],
            [page.Sec3_Title, page.Sec3_Text]
          ]
        }));

        // 2. Format the Stats array (nested array format like your original)
        const formattedStats = data.stats.map(stat => [stat.Value, stat.Text]);

        // 3. Format Pillars (already correct structure from the sheet)
        const formattedPillars = data.pillars.map(pillar => ({
          title: pillar.Title,
          text: pillar.Text
        }));

        // 4. Save to state
        setContent({
          stats: formattedStats,
          pillars: formattedPillars,
          pageContent: formattedPages
        });
        
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch content from Google Sheets:", err);
        setLoading(false);
      });
  }, []);

  // Show a blank screen or a loading spinner while fetching
  if (loading) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};