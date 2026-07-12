# famos Blog Setup Guide

This guide explains how to manage the famos blog with Sanity CMS. It is written for a beginner and assumes the website is already hosted on Vercel.

## What Sanity Does

Sanity is the place where the SEO/editorial team writes and publishes blog articles. After setup, editors do not need VS Code, GitHub, Vercel, React, or Firebase.

The daily workflow is:

1. Log in to Sanity Studio.
2. Create or edit an article.
3. Upload images.
4. Click Publish.
5. The article appears on the website automatically.

## One-Time Developer Setup

The website reads blog content from Sanity using these environment variables:

```bash
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-07-11
VITE_SITE_URL=https://www.famosnetwork.com

SANITY_STUDIO_PROJECT_ID=your_sanity_project_id
SANITY_STUDIO_DATASET=production
```

Add these in Vercel:

1. Open Vercel.
2. Open the `famos` project.
3. Go to `Settings`.
4. Go to `Environment Variables`.
5. Add each variable above.
6. Redeploy the website once after adding the variables.

After that, publishing new blog posts in Sanity does not require redeploying Vercel.

## How To Create A Sanity Account

1. Go to `https://www.sanity.io`.
2. Click `Start building` or `Get started`.
3. Sign in with Google or email.
4. Create an organization if Sanity asks for one.
5. Create a new project named `famos Blog`.
6. Choose the `production` dataset.
7. Copy the project ID from Sanity project settings.
8. Use that project ID for `VITE_SANITY_PROJECT_ID` and `SANITY_STUDIO_PROJECT_ID`.

## How To Run Sanity Studio Locally

This is for a developer only.

```bash
npm run sanity:dev
```

The Studio will open locally. It uses the schemas in the `sanity/schemaTypes` folder.

## How To Deploy Sanity Studio

This is usually done once by a developer.

```bash
npm run sanity:deploy
```

Sanity will ask for a Studio hostname. Use something simple, for example:

```text
famos-blog
```

The Studio URL will look similar to:

```text
https://famos-blog.sanity.studio
```

Give this URL to the SEO/editorial team.

## How To Invite Editors

1. Open Sanity Manage.
2. Select the `famos Blog` project.
3. Go to `Members`.
4. Click `Invite member`.
5. Enter the editor's email address.
6. Choose an appropriate role.
7. Send the invite.

For SEO writers, use a role that allows creating, editing, and publishing documents.

## How To Add Categories

Create these categories first:

- Parenting
- Teen Mental Health
- Relationships
- Schools
- Counselling
- Research
- Product Updates

Steps:

1. Open Sanity Studio.
2. Click `Category`.
3. Click `Create new`.
4. Enter the title.
5. Click `Generate` beside the slug field.
6. Pick a color.
7. Click `Publish`.

## How To Manage Authors

1. Open Sanity Studio.
2. Click `Author`.
3. Click `Create new`.
4. Add the author's name.
5. Upload a photo.
6. Add a short bio.
7. Add a LinkedIn URL if available.
8. Click `Publish`.

## How To Create A New Blog Article

1. Open Sanity Studio.
2. Click `Post`.
3. Click `Create new`.
4. Add the article title.
5. Click `Generate` beside the slug field.
6. Write a short excerpt.
7. Upload a featured image.
8. Add alt text for the image.
9. Choose an author.
10. Choose a category.
11. Set the published date.
12. Write the article body.
13. Fill in SEO fields.
14. Click `Publish`.

## How To Edit A Blog

1. Open Sanity Studio.
2. Click `Post`.
3. Select the article.
4. Make changes.
5. Click `Publish`.

The website will fetch the updated content directly from Sanity.

## How To Delete A Blog

1. Open Sanity Studio.
2. Click `Post`.
3. Select the article.
4. Open the document menu.
5. Choose `Delete`.

Deleting removes the article from the website after Sanity updates.

## How To Upload Images

1. Open a post.
2. Use `Featured Image` for the card and article hero image.
3. Use image blocks inside the article body for inline images.
4. Always add alt text.
5. Add captions when helpful.

The website uses Sanity Image CDN for optimized image delivery.

## How To Add Rich Content

The editor supports:

- H1
- H2
- H3
- Paragraphs
- Bold
- Italic
- Lists
- Blockquotes
- Links
- Images
- Image captions
- Image alt text
- Callout blocks
- Tables
- YouTube embeds
- Inline code

## How To Add A YouTube Video

1. In the article body, add a `YouTube Video` block.
2. Paste the YouTube URL.
3. Add an accessible title.
4. Publish the article.

## How To Save Drafts

Sanity saves drafts automatically while you work.

If an article is not ready, do not click `Publish`.

## How To Publish

1. Open the article.
2. Review title, slug, excerpt, image, author, category, published date, body, and SEO.
3. Click `Publish`.

The article will appear at:

```text
https://www.famosnetwork.com/blog/article-slug
```

## How To Schedule Publication

Set `Published Date` to a future date.

The website only shows posts where the published date is in the past. Future-dated posts stay hidden until that date passes.

## How To Restore Drafts

1. Open Sanity Studio.
2. Open the relevant article.
3. If a draft exists, Sanity shows the draft state.
4. Review the draft.
5. Publish it when ready.

## SEO Checklist For Every Article

Before publishing, check:

- Meta Title is clear and under 60 characters.
- Meta Description is clear and under 160 characters.
- Featured Image has alt text.
- Open Graph Image is uploaded if different from the featured image.
- Slug is short and readable.
- Category is selected.
- Author is selected.
- Published Date is set.

## Sitemap

The website has a dynamic sitemap at:

```text
https://www.famosnetwork.com/sitemap.xml
```

On Vercel, `/sitemap.xml` is rewritten to the serverless sitemap generator in `api/sitemap.js`.

This means new published Sanity articles can appear in the sitemap without a frontend redeploy.

## Troubleshooting

If the blog page says Sanity is not connected:

1. Check `VITE_SANITY_PROJECT_ID` in Vercel.
2. Check `VITE_SANITY_DATASET` in Vercel.
3. Redeploy once after adding environment variables.

If an article does not appear:

1. Confirm it is published.
2. Confirm `Published Date` is not in the future.
3. Confirm the slug exists.
4. Confirm the category and author are selected.

If images do not appear:

1. Confirm the image is uploaded in Sanity.
2. Confirm the image field is not empty.
3. Confirm alt text is added.

## Developer Notes

The blog routes are:

- `/blog`
- `/blog/:slug`

The main implementation files are:

- `src/pages/BlogList.jsx`
- `src/pages/BlogPost.jsx`
- `src/services/sanity.js`
- `src/components/blog`
- `sanity/schemaTypes`
- `api/sitemap.js`
