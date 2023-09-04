<template>
  <NuxtLayout>
    <div class="about-container">
      <div class="about">
        <h1 class="about-title">The Story of Vleer</h1>
        <p class="text">Vleer was originally planned to just be a simple music app that can play music without having to pay for those Music subcriptions. But eventually it turned into a public project that we now build with your help to create a redefined way of how we listen to Music.<br><br>The direction of Vleer turned around by 180° and now we are here thogeter as the two founders of Vleer PandaDEV and Waradu.<br><br>The idea for Vleer or as we called it at the beginnning "Music Player" was from PandaDEV as he didn't like all the other Music apps as they are complicated to use and the main reason cost money which was a problem for him. So he decided to create one by himself that will work with the intention to be simple and free. Waradu the co-founder helped him because together it always works better.<br><br>Also in the main focus was that the app should be Open Source to create transparency and gain trust.</p>
      </div>
    </div>
    <Ready />
  </NuxtLayout>
</template>

<style lang="scss">
.about-container{
  max-width: 1136px;
  width: 100%;
  margin-top: 80px;

  .about {
    display: flex;
    text-align: left;
    align-items: left;
    justify-content: left;
    flex-direction: column;
    gap: 16px;
  
    .text{
      color: #bfbfbf;
    }

    .about-title {
      font-size: 48px;
      text-align: left;
    }
  }
}
</style>
