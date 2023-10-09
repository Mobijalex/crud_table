import React from "react";
import "./notfound.css";

function NotFound() {
  return (
    <div>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center "></h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Data Not Found !</h3>

                  <a href="" class="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
