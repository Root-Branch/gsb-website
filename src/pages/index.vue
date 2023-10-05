<page>
title: About
</page>

<template>
  <div class="flex justify-center m-8">
    <div class="w-2/3 grid grid-cols-2 gap-4">
      <div class="col-span-2 card bg-base-100 shadow-xl">
        <figure><img src="../assets/banner.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h1 class="card-title">Welcome!</h1>
          <p>
            We are building a community of software developers and IT
            proessionals intent on changing the way we build and deploy software
            for a sustainable future.
          </p>
        </div>
      </div>

      <div class="col-span-2 card bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="card-title mb-8">Next Event</h1>
          <h2 class="font-semibold">
            <a
              class="link link-primary"
              href="https://www.meetup.com/gsf-brighton"
            >
              Environmental Impact of Hyped Technologies - Nov 2023
            </a>
          </h2>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="card-title">Want to speak?</h1>
          <p class="mt-4 mb-8">
            If you want to give your own talk at GSF Brighton please get in
            touch with us.
          </p>

          <a
            class="link link-primary inline"
            href="mailto:oliver@paperplane.software"
          >
            oliver@paperplane.software
          </a>
          <span>or</span>
          <a class="link link-primary inline" href="mailto:adam@cluelight.com">
            adam@cluelight.com
          </a>
        </div>
      </div>

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 class="card-title mb-8">Resources</h1>
          <ul>
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
