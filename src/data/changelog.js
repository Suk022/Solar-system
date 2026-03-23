export const changelog = [
  {
    id: 1,
    description: "Introduced BaseSidebar abstraction to unify shared layout and common logic across all sidebar panels",
    commitUrl: "https://github.com/Suk022/Solar-system/commit/aa671b49404d082eb3d0402437a0e08c291b6e4e",
    date: "2 Feb"
  },
  {
    id: 2,
    description: "Refactored planet architecture, introduced BasePlanet abstraction with dedicated per-planet components for improved modularity and maintainability",
    commitUrl: "https://github.com/Suk022/Solar-system/commit/aa671b49404d082eb3d0402437a0e08c291b6e4e",
    date: "3 Feb"
  },
  {
    id: 3,
    description: "Integrated localStorage caching with TTL management for NASA API responses to minimize redundant requests and avoid rate limiting",
    commitUrl: "https://github.com/Suk022/Solar-system/commit/fe55a68944fadc5533bffe0154d70487ec49a006",
    date: "19 Mar"
  },
  {
    id: 4,
    description: "Extended caching layer to asteroid tracker using date-based cache keys, and added a 10-second cooldown on Random Space Fact fetches",
    commitUrl: "https://github.com/Suk022/Solar-system/commit/0d2e8c4566690a3bfb456362340506d382ad043a",
    date: "21 Mar"
  },
  {
    id: 5,
    description: "Added interactive changelog modal with periodic refresh animation to surface project improvements and feature history",
    commitUrl: "https://github.com/Suk022/Solar-system/commit/f8b51b46b29ac89117c0a5a48ed3659e5ddec5d7",
    date: "24 Mar"
  }
];