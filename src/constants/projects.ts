import { webnwellAddCustomerImage, webnwellAddCustomerImage2, webnwellAnalyticsImage, webnwelldashboardImage, webnwellHeroImage, webnwellPerformanceImage } from "@/assets/projects/webnwell";

const PROJECTS_DATA = {
  webnwell: {
    hero: {
      title: "Webnwell",
      description: "Advanced Ads Analytics Dashboard that helps you analyze your advertising performance, track metrics, and optimize your campaigns all in one place.",
      images: [
        {
          title: "dashboard",
          thumbnail: webnwelldashboardImage,
        },
        {
          title: "optimize your ads",
          thumbnail: webnwellHeroImage,
        },
        {
          title: "analytics",
          thumbnail: webnwellAnalyticsImage,
        },
        {
          title: "performance metrics",
          thumbnail: webnwellPerformanceImage,
        },
        {
          title: "add customer 1",
          thumbnail: webnwellAddCustomerImage,
        },
        {
          title: "add customer 2",
          thumbnail: webnwellAddCustomerImage2,
        },
        {
          title: "dashboard",
          thumbnail: webnwelldashboardImage,
        },
        {
          title: "performance metrics",
          thumbnail: webnwellPerformanceImage,
        },
        {
          title: "analytics",
          thumbnail: webnwellAnalyticsImage,
        },
      ]
    },

  }
}

export default PROJECTS_DATA;