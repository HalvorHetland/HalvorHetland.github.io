# How to Add Your Travel Images

## Quick Steps:

1. **Save your travel photos** to the `src/assets/` folder with these exact filenames:
   - `travel-italy-coast.jpg` (Italian coastal town)
   - `travel-japan-torii.jpg` (Fushimi Inari-taisha, Japan)
   - `travel-asia-temple.jpg` (Temple with lanterns)
   - `travel-zebra.jpg`
   - `travel-giraffe.jpg`
   - `travel-lion.jpg`
   - `travel-san-francisco.jpg` (San Francisco)

2. **Uncomment the imports** in `src/app/components/Travel.tsx` (lines 7-13)

3. **Update the image references** in the `travelPhotos` array:
   - Change `image: undefined` to `image: travelItalyCoast` (and so on for each photo)

## Example:

After adding `travel-italy-coast.jpg` to `src/assets/`, update the component:

```typescript
// 1. Uncomment this line:
import travelItalyCoast from "../../assets/travel-italy-coast.jpg";

// 2. Update the photo object:
{
  id: 1,
  image: travelItalyCoast, // Changed from undefined
  location: "Coastal Town",
  country: "Italy",
  // ...
}
```

## Current Status:

The Travel section will show placeholder cards until you add the images. Each placeholder shows the location name and a camera icon.

Once you add the images and update the imports, they will appear automatically!
