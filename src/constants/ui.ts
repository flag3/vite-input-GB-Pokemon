export const UI_CONSTANTS = {
  MOBILE_BREAKPOINT: 768,
  GRID: {
    CELL_SIZE: 40,
    GAP: 4,
    PADDING: 8,
    BORDER_RADIUS: 4,
  },
  LAYOUT: {
    MAX_WIDTH: 1200,
    CONTAINER_PADDING: 20,
    SECTION_GAP: 40,
    SIDEBAR_WIDTH: 400,
  },
  TYPOGRAPHY: {
    FONT_SIZE_INPUT: 16,
    FONT_SIZE_BODY: 14,
    FONT_SIZE_SMALL: 12,
    FONT_SIZE_DISPLAY: 18,
  },
  COLORS: {
    PRIMARY: "#2196f3",
    SECONDARY: "#4a90e2",
    SUCCESS: "#4caf50",
    BACKGROUND_LIGHT: "#f0f0f0",
    BACKGROUND_DARK: "#2a2a2a",
    CARD_LIGHT: "#f5f5f5",
    CARD_DARK: "#333",
    TEXT_MUTED: "#666",
  },
  ANIMATION: {
    FADE_OUT_DURATION: "0.5s",
    TRANSITION_DURATION: "0.3s",
    BLINK_DURATION: "1s",
  },
} as const;
