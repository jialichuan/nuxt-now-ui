<template>
    <navbar position="fixed"
            :transparent="transparent"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">
        <template slot-scope="{toggle, isToggled}">
                <nuxt-link v-popover:popover1 class="navbar-brand" to="/">
                    Now Ui Kit Pro
                </nuxt-link>
                <el-popover
                        ref="popover1"
                        popper-class="popover"
                        placement="bottom"
                        width="300"
                        trigger="hover">
                    <div class="popover-body">Designed by Invision. Coded &nbsp; by CreativeTim and BinarCode</div>
                </el-popover>
        </template>
        <template slot="navbar-menu">
            <drop-down tag="li" title="Components" icon="now-ui-icons design_app" class="nav-item">
              <nav-link to="/">
                <i class="now-ui-icons design_image"></i> Presentation
              </nav-link>
                <nav-link to="/components">
                    <i class="now-ui-icons business_chart-pie-36"></i> Components
                </nav-link>
                <a href="https://demos.creative-tim.com/nuxt-now-ui-kit-pro/documentation" target="_blank" class="dropdown-item">
                    <i class="now-ui-icons design_bullet-list-67"></i> Documentation
                </a>
            </drop-down>
            <drop-down tag="li" title="sections" icon="now-ui-icons files_paper" class="nav-item">
                <nav-link to="/sections#headers">
                    <i class="now-ui-icons shopping_box"></i> Headers
                </nav-link>
                <nav-link to="/sections#features">
                    <i class="now-ui-icons ui-2_settings-90"></i> Features
                </nav-link>
                <nav-link to="/sections#blogs">
                    <i class="now-ui-icons text_align-left"></i> Blogs
                </nav-link>
                <nav-link to="/sections#teams">
                    <i class="now-ui-icons sport_user-run"></i> Teams
                </nav-link>
                <nav-link to="/sections#projects">
                    <i class="now-ui-icons education_paper"></i> Projects
                </nav-link>
                <nav-link to="/sections#pricing">
                    <i class="now-ui-icons business_money-coins"></i> Pricing
                </nav-link>
                <nav-link to="/sections#testimonials">
                    <i class="now-ui-icons ui-2_chat-round"></i> Testimonials
                </nav-link>
                <nav-link to="/sections#contactus">
                    <i class="now-ui-icons tech_mobile"></i> Contact Us
                </nav-link>
            </drop-down>

            <drop-down tag="li" title="Examples" icon="now-ui-icons design_image" class="nav-item">
                <nav-link to="/about">
                    <i class="now-ui-icons business_bulb-63"></i> About-us
                </nav-link>
                <nav-link to="/blog-post">
                    <i class="now-ui-icons text_align-left"></i> Blog Post
                </nav-link>
                <nav-link to="/blog-posts">
                    <i class="now-ui-icons design_bullet-list-67"></i> Blog Posts
                </nav-link>
                <nav-link to="/contact">
                    <i class="now-ui-icons location_pin"></i> Contact Us
                </nav-link>
                <nav-link to="/landing">
                    <i class="now-ui-icons education_paper"></i> Landing Page
                </nav-link>
                <nav-link to="/login">
                    <i class="now-ui-icons users_circle-08"></i> Login Page
                </nav-link>
                <nav-link to="/pricing">
                    <i class="now-ui-icons business_money-coins"></i> Pricing
                </nav-link>
                <nav-link to="/ecommerce">
                    <i class="now-ui-icons shopping_shop"></i> Ecommerce Page
                </nav-link>
                <nav-link to="/product">
                    <i class="now-ui-icons shopping_bag-16"></i> Product Page
                </nav-link>
                <nav-link to="/profile">
                    <i class="now-ui-icons users_single-02"></i> Profile Page
                </nav-link>
                <nav-link to="/signup">
                    <i class="now-ui-icons tech_mobile"></i> Signup Page
                </nav-link>
            </drop-down>
            <li class="nav-item">
                <a class="nav-link btn btn-default btn-neutral"
                   href="https://www.creative-tim.com/product/nuxt-now-ui-kit-pro" target="_blank">
                    <p>Buy Now</p>
                </a>
            </li>

        </template>
    </navbar>
</template>

<script>
  import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
  import { Popover } from 'element-ui'
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
    },
    components: {
      DropDown,
      Navbar,
      NavbarToggleButton,
      NavLink,
      [Popover.name]: Popover
    }
  }
</script>

<style scoped>

</style>
