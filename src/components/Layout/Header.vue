<template>
  <header class="position-relative">
    <span class="header-backdrop shadow"></span>
    <nav class="navbar navbar-dark pt-5 pb-2 container">
      <div class="navbar-brand mx-auto mx-md-0 text-white p-0">
        <router-link :to="{ name: 'home' }">
          <h1 class="fs-3 fw-bolder text-primary-50">
            <span class="me-2">
              <i class="bi bi-github"></i>
            </span>
            Repofind
          </h1>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "LayoutHeader",
};
</script>

<style lang="scss" scoped>
header {
  .header-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -5rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='200' preserveAspectRatio='none' viewBox='0 0 1440 200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='200' x='0' y='0' fill='rgba(49%2c 46%2c 129%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c335.344C61.687%2c335.812%2c102.128%2c273.016%2c153.961%2c239.567C205.672%2c206.196%2c278.698%2c194.935%2c304.3%2c138.969C329.903%2c83.002%2c284.782%2c20.926%2c282.108%2c-40.561C279.025%2c-111.452%2c323.317%2c-187.844%2c287.425%2c-249.055C251.298%2c-310.667%2c170.897%2c-328.538%2c102.067%2c-347.607C34.074%2c-366.444%2c-37.285%2c-377.408%2c-105.057%2c-357.791C-172.968%2c-338.133%2c-227.8%2c-290.92%2c-275.149%2c-238.418C-323.246%2c-185.087%2c-378.983%2c-126.254%2c-378.634%2c-54.439C-378.29%2c16.292%2c-316.727%2c68.954%2c-273.385%2c124.851C-238.969%2c169.237%2c-196.971%2c202.979%2c-152.468%2c237.244C-103.594%2c274.875%2c-61.681%2c334.876%2c0%2c335.344' fill='%23272567'%3e%3c/path%3e%3cpath d='M1440 765.097C1552.895 765.99 1672.104 769.986 1767.04 708.884 1861.952 647.797 1930.623 545.057 1953.585 434.546 1974.779 332.543 1891.584 239.898 1886.1019999999999 135.86 1879.786 16.00200000000001 1971.624-107.31299999999999 1919.339-215.35000000000002 1866.147-325.26199999999994 1739.415-387.30999999999995 1620.177-413.625 1504.431-439.169 1379.71-415.31500000000005 1276.378-357.246 1183.157-304.859 1139.248-200.68099999999998 1081.313-110.80399999999997 1031.537-33.58500000000001 991.433 44.339 961.52 131.20499999999998 925.006 237.238 858.113 344.11699999999996 887.374 452.376 917.554 564.0319999999999 1015.606 646.7719999999999 1116.269 703.735 1213.833 758.945 1327.902 764.21 1440 765.097' fill='%233b379b'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
}
</style>
