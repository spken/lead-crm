"use client";

// Utility function for scrolling to anchors with fixed header offset
export function scrollToAnchor(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  
  const element = document.getElementById(id);
  if (!element) return;
  
  const headerOffset = 96; // Adjust this value based on your header height + some padding
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}
