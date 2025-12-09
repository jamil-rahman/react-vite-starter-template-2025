export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export const defaultMeta: PageMeta = {
  title: 'Bliss Play Space - Indoor Playground & Party Venue',
  description: 'Safe, fun indoor playground for children. Book admissions, parties, and events at Bliss Play Space in Brantford, ON.',
  ogImage: '/assets/hero.jpg',
};

export function updatePageMeta(meta: Partial<PageMeta>) {
  const finalMeta = { ...defaultMeta, ...meta };
  
  document.title = finalMeta.title;
  
  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', finalMeta.description);
  
  // Update Open Graph tags
  const updateOrCreateOG = (property: string, content: string) => {
    let og = document.querySelector(`meta[property="${property}"]`);
    if (!og) {
      og = document.createElement('meta');
      og.setAttribute('property', property);
      document.head.appendChild(og);
    }
    og.setAttribute('content', content);
  };
  
  updateOrCreateOG('og:title', finalMeta.title);
  updateOrCreateOG('og:description', finalMeta.description);
  if (finalMeta.ogImage) {
    updateOrCreateOG('og:image', finalMeta.ogImage);
  }
  
  // Update Twitter Card tags
  const updateOrCreateTwitter = (name: string, content: string) => {
    let twitter = document.querySelector(`meta[name="twitter:${name}"]`);
    if (!twitter) {
      twitter = document.createElement('meta');
      twitter.setAttribute('name', `twitter:${name}`);
      document.head.appendChild(twitter);
    }
    twitter.setAttribute('content', content);
  };
  
  updateOrCreateTwitter('card', 'summary_large_image');
  updateOrCreateTwitter('title', finalMeta.title);
  updateOrCreateTwitter('description', finalMeta.description);
  if (finalMeta.ogImage) {
    updateOrCreateTwitter('image', finalMeta.ogImage);
  }
}

