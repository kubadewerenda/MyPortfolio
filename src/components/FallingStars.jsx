import React, { useEffect } from 'react';

const FallingStars = () => {
    useEffect(()=>{
        const createStaticStars=()=>{
            const starContainer=document.querySelector('.falling-stars');
            for(let i=0;i<100;i++){
                const star=document.createElement('div');
                star.classList.add('static-star');

                const randomX=Math.random()*window.innerWidth;
                const randomY=Math.random()*window.innerHeight;
                const randomSize=Math.random()*2+2;
                const randomColor = Math.random() > 0.5
                    ? 'rgb(218, 252, 255)'
                    : 'rgb(235, 255, 148)';

                star.style.left=`${randomX}px`;
                star.style.top=`${randomY}px`;
                star.style.width=`${randomSize}px`;
                star.style.height=`${randomSize}px`;
                star.style.background=randomColor;
                star.style.animationDelay=`${Math.random()*5}s`;

                starContainer.appendChild(star);
            }
        };

        createStaticStars();

        const interval=setInterval(()=>{
            const star=document.createElement('div');
            star.classList.add('falling-star');

            const randomSize=Math.random()*3+4;
            const randomColor = Math.random() > 0.5
                    ? 'rgb(218, 252, 255)'
                    : 'rgb(235, 255, 148)';

            star.style.background=randomColor;
            star.style.width=`${randomSize}px`;
            star.style.height=`${randomSize}px`;

            const side=Math.floor(Math.random()*4);
            const randomPosition=Math.random()*100;

            if(side===0){
                star.style.top=`0px`;
                star.style.left=`${randomPosition}vw`;
                star.style.transform=`translate(${Math.random()*50-25}vw,100vh)`;
            }else if(side===1){
                star.style.bottom=`0px`;
                star.style.left=`${randomPosition}vw`;
                star.style.transform=`translate(${Math.random()*50-25}vw,-100vh)`;                
            }else if(side===2){
                star.style.top=`${randomPosition}vh`;
                star.style.left=`0px`;
                star.style.transform=`translate(100vw,${Math.random()*50-25}vh)`;
            }else{
                star.style.bottom=`${randomPosition}vh`;
                star.style.right=`0px`;
                star.style.transform=`translate(-100vw,${Math.random()*50-25}vh)`;
            }

            document.querySelector('.falling-stars').appendChild(star);

            setTimeout(()=>{
                star.remove();
            },3000);
        },2000);

        return ()=> clearInterval(interval);
    },[]);

    return (
        <div className="falling-stars">
            <div className="nebula"></div>
            <div 
                className="nebula"
                style={{
                    top:"70%",
                    left:"30%",
                    background: 'radial-gradient(circle, rgba(255, 134, 174, 0.25),transparent)',
                }}
            ></div>
        </div>
    )
}

export default FallingStars