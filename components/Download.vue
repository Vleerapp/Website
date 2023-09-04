<template>
  <nuxt-link to="/download">
    <div id="button-outter" class="button-outter">
      <canvas id="particle-canvas" class="particle-canvas"></canvas>
      <div class="button-inner">
        Download
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
var rotation = 0

onMounted(async () => {
  // lightingParticels()
  while (true) {
    rotation = parseInt(document.getComputedStyle(document.documentElement).getPropertyValue('--rotation').trim().replace('deg', ''));
    rotation += 1;
    if (rotation >= 360) rotation = 0
    document.documentElement.style.setProperty("--rotation", rotation + "deg")
    await new Promise(resolve => setTimeout(resolve, 7))
  }
})

///////////

function lightingParticels() {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particleCount = 5;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 1,
      vx: Math.random() * 0.15 - 0.045,
      vy: Math.random() * 0.15 - 0.045,
      opacity: 1,
    });
  }

  function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.y < 0) p.y = canvas.height;
      if (p.x > canvas.width) p.x = 0;
      if (p.y > canvas.height) p.y = 0;

      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    requestAnimationFrame(updateParticles);
  }

  updateParticles();
}
</script>

<style lang="scss">
:root {
  --rotatio: 0deg;
}

.button-outter {
  background: linear-gradient(var(--rotation), #ffffff 40%, #000000 60%);
  width: 206px;
  height: 50px;
  border-radius: 12px;
  padding: 1px;
  position: relative;
}

.button-inner {
  background-color: black;
  width: 100%;
  height: 100%;
  border-radius: 11px;
  display: grid;
  place-items: center;
}

.particle-canvas{
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;
}
</style>