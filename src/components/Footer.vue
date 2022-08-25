<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <div class="info">
            <div class="logo">
              <Router-Link to="/tw" alt="財團法人臺灣民主基金會LOGO" title="財團法人臺灣民主基金會">財團法人臺灣民主基金會</Router-Link>
            </div>
            <ul class="contact">
              <li>
                <i class="fa-solid fa-phone"></i>
                <p>TEL+886-2-2708-0100</p>
              </li>
              <li>
                <i class="fa-solid fa-fax"></i>
                <p>FAX+886-2-2708-0100</p>
              </li>
              <li class="loc">
                <i class="fa-solid fa-location-dot"></i>
                <p>No.4, Alley 17, Lane 147, Section 3, Sinyi Road, Taipei 106, Taiwan</p>
              </li>
            </ul>
          </div>
          <div class="a11y">
            <div class="a11y-img">
              <img src="../assets/images/aplus.jpg" alt="通過A+優先等級無障礙網頁檢測" width="88" height="31">
            </div>
            <div>
              <p class="policy">Privacy Policy <br class="br"> <span class="v-line">|</span> Security Policy</p>
              <p>Update：<span class="date">2022-04-14</span>&nbsp;
                <span class="time">09:21:07</span>
              </p>
              <p>Total Visited： <span>9055921</span></p>
            </div>
          </div>
        </div>
        <div class="link">
          <p class="link-title">Links</p>
        </div>
      </div>
    </div>
    <div class="copyright">Copyright &copy; 2022 TFD. All rights reserved. Design by HR</div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {

  &-content {
    display: flex;
    flex-direction: column;

    @include lg {
      flex-direction: column-reverse;
    }

    .footer-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        row-gap: 20px;
        flex: 1;

        @include lg {
          flex-direction: row;
          align-items: center;
        }

        .contact {
          display: flex;
          flex-direction: column;
          row-gap: 8px;
          width: 250px;
          transform: translate(12px);

          @include lg {
            width: auto;
            transform: none;
          }

          li {
            display: flex;
            align-items: center;
            column-gap: 6px;

            svg {
              display: none;

              @include lg {
                display: block;
              }
            }
          }

          .loc {

            @include lg {
              transform: translate(3px);
            }
          }
        }
      }

      .a11y {
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        @include lg {
          flex-direction: column-reverse;
          row-gap: 10px;
        }

        &-img {
          align-self: flex-end;
        }

        .policy {
          font-weight: 700;
        }

        .br {
          display: block;
          
          @include lg {
            display: none !important;
          }
        }
        .v-line {
          display: none;
          
          @include lg {
            display: inline-block;
          }
        }

      }

      .logo a {
        display: block;
        margin: 0px;
        padding: 0px;
        width: 230px;
        height: 55px;
        background-image: url('../assets/images/logo/logo.gif');
        text-indent: -500px;
      }
    }

    .link {

      &-title {
        text-align: center;
      }
    }
  }

  .copyright {
    color: #fff;
    background: $main;
    text-align: center;
    padding: 10px 0;
  }
}
</style>