<page>
</page>

<template>
  <div class="flex justify-center m-4 md:m-8">
    <div class="max-w-5xl grid grid-cols-2 gap-4">
      
      <div class="col-span-2 card bg-base-100 shadow-xl">
        <figure><img src="../assets/banner.png" alt="Shoes" /></figure>
        <div class="card-body">
          <!--h1 class="card-title text-2xl md:text-3xl">Welcome!</h1-->
          <p class="font-semibold text-center text-lg md:text-xl mt-4">
            A community dedicated to digital sustainability. 
          </p>
          <p class="font-thin text-center text-lg md:text-xl mt-4">
            We are exploring how we design, develop and deploy software to reduce the impact technology has on the environment.
            We are proud to be supported by the Green Software Foundation and Silicon Brighton.
          </p>
        </div>
      </div>

      <div class="col-span-2 card bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="card-title text-2xl md:text-3xl">Upcoming Events</h1>

          <div class="max-w-5xl grid grid-cols-2">

            <div class="col-span-2 md:col-span-1">
              <div class="text-lg md:text-xl mt-4">
                <a class="link link-primary" href="https://www.meetup.com/gsf-brighton">
                  The Environmental Impact of AI
                </a>
                <p class="font-thin">Roundtable Discussion</p>
                <p>18:00 Weds Jan 24th, 2024</p>
                <p> Wrap, 83 Queens Rd, Brighton BN1 3XE </p>
              </div>
            </div>
            
            <div class="col-span-2 md:col-span-1">
              <div class="text-lg md:text-xl mt-4">
                <a class="link link-primary" href="https://www.meetup.com/gsf-brighton">
                  Measuring Software Emissions
                </a>
                <p class="font-thin">
                  Talk: Asim Hussain (GSF Director)
                </p>
                <p>
                  18:00 April 30th, 2024
                </p>
                <p>
                  Venue TBC
                </p>
              </div>
            </div>

          </div>
        </div> 
      </div>

      <div class="col-span-2 md:col-span-1 card bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="card-title text-2xl md:text-3xl">Want to speak?</h1>
          <div class="text-lg md:text-xl mt-4">
            <p class="mb-2">
              We welcome anybody who wants to get involved, speak at GSF Brighton or just have a chat with us.
            </p>

            <div>
              <a
                class="link link-primary inline"
                href="mailto:oli@rootandbranch.io"
                >
                oli@rootandbranch.io
              </a>
            </div>
            <div>
              <a
                class="link link-primary inline"
                href="mailto:adam@rootandbranch.io"
                >
                adam@rootandbranch.io
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 card bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="card-title text-2xl md:text-3xl">Resources</h1>
          <ul class="text-lg md:text-xl mt-4">
            <li class="mb-2">
              <a
                class="link link-primary"
                target="_blank"
                href="https://greensoftware.foundation"
              >
                Green Software Foundation
              </a>
            </li>
            <li class="mb-2">
              <a
                class="link link-primary"
                target="_blank"
                href="https://www.thegreenwebfoundation.org"
              >
                Green Web Foundation
              </a>
            </li>
            <li class="mb-2">
              <a
                class="link link-primary"
                target="_blank"
                href="https://climateaction.tech"
              >
                ClimateAction.Tech
              </a>
            </li>
            <li class="mb-2">
              <a
                class="link link-primary"
                target="_blank"
                href="https://github.com/Green-Software-Foundation/awesome-green-software"
              >
                Awesome Green Software
              </a>
            </li>
            <li class="mb-2">
              <a
                class="link link-primary"
                target="_blank"
                href="https://podcast.greensoftware.foundation/"
              >
                Podcast - Environment Variables
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-span-2 card bg-base-100 shadow-xl">
        <div class="card-body">

          <h1 class="text-center font-thin text-2xl md:text-3xl">Sponsors</h1>
          
          <div class="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
            <div>
              <a href="https://greensoftware.foundation" target="_blank">
                <img src="../assets/gruene-Software-Green-Software-Foundation.png" alt="gsf-logo" width="120" height="60" />
              </a>
            </div>
            <div>
              <a href="https://siliconbrighton.com" target="_blank">
                <img src="../assets/SB_B&W_RGB.png" alt="sb-logo" width="120" height="60" />
              </a>
            </div>
            <div>
              <a href="https://rootandbranch.io" target="_blank">
                <img src="../assets/Root&BranchMainLogo.png" alt="rab-logo" width="120" height="60" />
              </a>
            </div>
            <div>
              <a href="https://wrap.space" target="_blank">
                <img src="../assets/WRAP+Primary+Logo+Pink+sRGB.png" alt="wrap-logo" width="60" height="60"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="card-title">Open Source</h1>
          <p class="mt-4 mb-8">
            Below is a list of open source project you can check out and
            contribute to!
          </p>

          <ul>
            <li></li>
          </ul>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="card-title">Tools</h1>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style lang="postcss">
@import url("~/assets/base.css");

.container {
  @apply w-2/3 mx-auto border shadow-lg;
}
</style>
