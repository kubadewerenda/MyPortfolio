import React, { useEffect } from 'react';

const NeonCursor = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.id = 'particle-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const particles = [];
    const colors = ['#dafcff', '#e0fdff', '#ebff94', '#c9d984', '#ebfaaa'];
    const maxParticles = 100;

    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x, y) => {
      particles.push({
        x,
        y,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocityX: (Math.random() - 0.5) * 1,
        velocityY: (Math.random() - 0.5) * 1,
        alpha: 1,
        glowSize: Math.random() * 15 + 5,
      });

      if (particles.length > maxParticles) particles.shift();
    };

    const drawStar = (x, y) => {
      const starSize = 6;
      ctx.save();
      ctx.beginPath();
      ctx.translate(x, y);
      ctx.moveTo(0, -starSize);
      for (let i = 0; i < 5; i++) {
        ctx.rotate(Math.PI / 5);
        ctx.lineTo(0, -(starSize / 2));
        ctx.rotate(Math.PI / 5);
        ctx.lineTo(0, -starSize);
      }
      ctx.closePath();
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#ffffff';
      ctx.globalAlpha = 0.8;
      ctx.fill();
      ctx.restore();
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawStar(mouseX, mouseY);

      particles.forEach((particle, index) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.alpha -= 0.01;

        if (particle.alpha <= 0) particles.splice(index, 1);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = particle.glowSize;
        ctx.shadowColor = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
      });
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      createParticle(mouseX, mouseY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default NeonCursor;
