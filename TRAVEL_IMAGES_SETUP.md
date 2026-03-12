# Travel Images Setup Guide

## Step 1: Save Your Travel Photos

Save your travel photos to the `src/assets/` folder with these filenames:

1. **Italy Coastal Town** → `travel-italy-coast.jpg`
2. **Japan Torii Gates** → `travel-japan-torii.jpg`
3. **East Asian Temple** → `travel-asia-temple.jpg`
4. **Zebra** → `travel-zebra.jpg`
5. **Giraffe** → `travel-giraffe.jpg`
6. **Lion** → `travel-lion.jpg`
7. **San Francisco** → `travel-san-francisco.jpg`

## Step 2: Image Optimization (Optional but Recommended)

For best performance, optimize your images:

- **Recommended size:** 1200-2000px width
- **Format:** JPG or WebP
- **File size:** Try to keep under 500KB per image

You can use tools like:
- [TinyPNG](https://tinypng.com/) for compression
- [Squoosh](https://squoosh.app/) for format conversion

## Step 3: Update Image Paths (if needed)

If you use different filenames, update the `travelPhotos` array in `src/app/components/Travel.tsx`:

```typescript
{
  id: 1,
  image: "/assets/your-filename.jpg", // Update this path
  location: "Coastal Town",
  country: "Italy",
  // ...
}
```

## Step 4: Customize Locations and Descriptions

Edit the `travelPhotos` array in `Travel.tsx` to:
- Update location names
- Add more accurate country/region names
- Customize descriptions
- Adjust categories (city, culture, nature, wildlife)

## Current Image Paths Expected:

- `/assets/travel-italy-coast.jpg`
- `/assets/travel-japan-torii.jpg`
- `/assets/travel-asia-temple.jpg`
- `/assets/travel-zebra.jpg`
- `/assets/travel-giraffe.jpg`
- `/assets/travel-lion.jpg`
- `/assets/travel-san-francisco.jpg`

After adding images, the component will automatically display them in a beautiful masonry gallery layout!
