<template>
  <header>
    <nav>
      <ul class="nav-list">
        <li>
          <router-link to="/" active-class="active">Home</router-link>
        </li>
        <li>
          <router-link to="/categories" active-class="active"
            >Categories</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  width: 100%;
  height: 30px;
  margin-bottom: 50px;
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 10px rgba(#ddd, 0.1);
  
  .nav-list {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  a {
    text-decoration: none;

    &.active,
    &:hover {
      color: #ff374a;
      font-weight: 600;
    }

    &:not(:last-child) {
      margin-right: 35px;
    }
  }
}
</style>
