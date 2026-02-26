/**
 * Contrast and Accessibility Utilities
 *
 * Provides functions for calculating contrast ratios and ensuring WCAG AA compliance
 */

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calculate relative luminance of a color
 * Based on WCAG 2.0 formula
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * Returns a value between 1 and 21
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) return 1;

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Validate if contrast meets WCAG AA standards
 * AA requires 4.5:1 for normal text, 3:1 for large text
 */
export function validateContrast(
  textColor: string,
  backgroundColor: string,
  isLargeText: boolean = false
): { passes: boolean; ratio: number; level: 'AAA' | 'AA' | 'Fail' } {
  const ratio = getContrastRatio(textColor, backgroundColor);
  const minRatio = isLargeText ? 3 : 4.5;
  const aaaRatio = isLargeText ? 4.5 : 7;

  return {
    passes: ratio >= minRatio,
    ratio,
    level: ratio >= aaaRatio ? 'AAA' : ratio >= minRatio ? 'AA' : 'Fail',
  };
}

/**
 * Get appropriate text color for a given background
 * Returns white or near-black based on background luminance
 */
export function getContrastText(backgroundColor: string): string {
  const rgb = hexToRgb(backgroundColor);
  if (!rgb) return '#FFFFFF';

  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);

  // If background is light (luminance > 0.5), use dark text
  // If background is dark (luminance <= 0.5), use light text
  return luminance > 0.5 ? '#1a1a1a' : '#FFFFFF';
}

/**
 * Check if a background color is considered "dark"
 */
export function isDarkBackground(backgroundColor: string): boolean {
  const rgb = hexToRgb(backgroundColor);
  if (!rgb) return true;

  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  return luminance <= 0.5;
}

/**
 * Get Tailwind class for contrast-safe text based on background
 */
export function getContrastTextClass(backgroundColor: string): string {
  return isDarkBackground(backgroundColor) ? 'text-white' : 'text-gray-900';
}

/**
 * Predefined safe color combinations for the Fuzzy Rock theme
 */
export const safeColorCombos = {
  darkBg: {
    primary: '#FAFAFA', // White text on dark
    secondary: '#D9D9D9', // Light gray on dark
    muted: '#999999', // Medium gray on dark
    emerald: '#10B981', // Emerald accent
    cyan: '#06B6D4', // Cyan accent
  },
  lightBg: {
    primary: '#0F172A', // Dark slate on light
    secondary: '#334155', // Medium slate on light
    muted: '#64748B', // Gray on light
    emerald: '#059669', // Darker emerald for contrast
    cyan: '#0891B2', // Darker cyan for contrast
  },
};

/**
 * Get color palette based on background type
 */
export function getThemeColors(isDark: boolean = true) {
  return isDark ? safeColorCombos.darkBg : safeColorCombos.lightBg;
}

/**
 * Ensure text shadow for readability over gradients
 */
export function getTextShadowStyle(backgroundColor?: string): React.CSSProperties {
  const isDark = backgroundColor ? isDarkBackground(backgroundColor) : true;

  return isDark
    ? {
        textShadow:
          '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.4)',
      }
    : {
        textShadow:
          '0 1px 2px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.4)',
      };
}
