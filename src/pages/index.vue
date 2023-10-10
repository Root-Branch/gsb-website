<page>
</page>

<template>
  <div class="flex justify-center m-4 md:m-8">
    <div class="max-w-5xl grid grid-cols-2 gap-4">
      <div class="col-span-2 card bg-base-100 shadow-xl">
        <figure><img src="../assets/banner.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h1 class="card-title text-2xl md:text-3xl">Welcome!</h1>
          <p class="text-lg md:text-xl mt-4">
            We are building a community of software developers and IT
            proessionals intent on changing the way we build and deploy software
            for a sustainable future.
          </p>
        </div>
      </div>

      <div class="col-span-2 card bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="card-title text-2xl md:text-3xl">Next Event</h1>
          <div class="text-lg md:text-xl mt-4">
            <a
              class="link link-primary"
              href="https://www.meetup.com/gsf-brighton"
            >
              Environmental Impact of AI
            </a>
            <p class="mt-2">18:00 Nov 29th, 2023</p>
            <p>Wrap, 83 Queens Rd, Brighton BN1 3XE</p>
          </div>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 card bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="card-title text-2xl md:text-3xl">Want to speak?</h1>
          <div class="text-lg md:text-xl mt-4">
            <p class="mb-2">
              If you want to give your own talk at GSF Brighton please get in
              touch with us.
            </p>

            <a
              class="link link-primary inline"
              href="mailto:oliver@paperplane.software"
            >
              oliver@paperplane.software
            </a>
            <a
              class="link link-primary inline"
              href="mailto:adam@cluelight.com"
            >
              adam@cluelight.com
            </a>
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
          </ul>
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
