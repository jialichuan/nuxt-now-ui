<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.creative-tim.com">
                            Creative Tim
                        </a>
                    </li>
                    <li>
                        <a href="https:///presentation.creative-tim.com">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="https:///blog.creative-tim.com">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="https://www.creative-tim.com/license">
                            License
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{year}}, Designed by
                <a href="https:///www.invisionapp.com" target="_blank" rel="noopener" class="text-success">Invision</a>. Coded by
                <a href="https://binarcode.com" target="_blank" class="text-success" rel="noopener">BinarCode</a> and
                <a href="https://www.creative-tim.com" target="_blank" class="text-success" rel="noopener">Creative Tim</a>.
            </div>
        </div>
    </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
