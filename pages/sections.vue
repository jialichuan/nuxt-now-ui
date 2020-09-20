<template>
    <div class="wrapper sections-pge">
        <div class="section-space"></div>
        <headers-section></headers-section>
        <features-section></features-section>
        <blog-section></blog-section>
        <teams-section></teams-section>
        <projects-section></projects-section>
        <pricing-section></pricing-section>
        <testimonial-section></testimonial-section>
        <contact-section></contact-section>
    </div>
</template>
<script>
  import HeadersSection from '@/components/pages/sections/Headers'
  import FeaturesSection from '@/components/pages/sections/Features'
  import BlogSection from '@/components/pages/sections/Blogs'
  import TeamsSection from '@/components/pages/sections/Teams'
  import ProjectsSection from '@/components/pages/sections/Projects'
  import PricingSection from '@/components/pages/sections/Pricing'
  import TestimonialSection from '@/components/pages/sections/Testimonials'
  import ContactSection from '@/components/pages/sections/Contact'
  export default {
    name: 'sections',
    layout: 'white-nav',
    components: {
      HeadersSection,
      FeaturesSection,
      BlogSection,
      TeamsSection,
      ProjectsSection,
      PricingSection,
      TestimonialSection,
      ContactSection
    }
  }
</script>
<style>
</style>
