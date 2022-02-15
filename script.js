const content = document.querySelector('.content');
const container = document.querySelector('.img-container');

const nodeLetters = document.querySelectorAll('.letter');

const maxDelta = container.offsetWidth * 0.048828125 / 3;
// const maxDelta = 33;
const sensivity = 1;
const mouseSensivity = Math.round(window.innerWidth * 0.00572);
``
let layers = [];

let zeroX = 0;
let zeroY = 0;

let currentX = 0;
let currentY = 0;

// Создание вектора.
function createVector(color) {
    return (
        `
                <svg version="1.0" id="Слой_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <rect x="0" y="-0.3" style="fill: none; stroke: ${hsl(color)}; stroke-miterlimit: 10" width="512" height="512" />
                    <g>
                        <path style="fill: ${hsl(color)}" d="M242,319c1.8,0,3.8,0.5,5.7,1.4l95.8,47c8.1,4,15.4,9.4,21.3,15.8c5.6,6.1,9.8,12.9,12,19.7
		c2.7,8.5,2.3,16.4-1.2,23c-4.7,8.7-15,13.7-28.3,13.7c-9.6,0-19.9-2.5-29.7-7.4l-9.7-4.8l-2.4-1.2l-0.9,2.5l-2.7,7.2
		c-2.1,5.6-6.1,10.3-11.6,13.6c-5.5,3.3-12.3,5-19.8,5c-7.1,0-14.5-1.5-21.9-4.6c-13.4-5.5-25.2-15-32.3-26.1
		c-7-10.8-9-22.3-5.7-31.4l26.1-70.5C237.3,320,239.3,319,242,319L242,319z M242,316.6c-3.6,0-6.5,1.6-7.6,4.4l-26.1,70.5
		c-7.6,20.5,10.2,48.6,39.3,60.5c7.9,3.2,15.6,4.7,22.8,4.7c15.9,0,28.9-7.5,33.6-20.1l2.7-7.2l9.7,4.8c10.3,5.1,21.1,7.6,30.7,7.6
		c13.6,0,25.1-5,30.4-15c10.4-19.6-5.3-48.1-33.1-61.7l-95.8-47C246.4,317.1,244.1,316.6,242,316.6L242,316.6z" />
                        <g>
                            <g>
                                <path style="fill: ${hsl(color)}" d="M0-0.3v512h512v-512H0z M497.7,497.5H182.6c-1.4,0-2.5-1.1-2.5-2.5v-44.4h-0.5v44.7c0,1.3-1.1,2.4-2.4,2.4
				c-0.7,0-1.2-0.3-1.7-0.7c-0.4-0.4-0.7-1-0.7-1.7v-44.7h-2.4V495c0,1.4-1.1,2.5-2.5,2.5H14.2V13.9h483.6V497.5z" />
                            </g>
                            <path style="fill: ${hsl(color)}" d="M204.7,221.8c1.5,2.2,2.8,4.6,3.9,7.1c0.5,1.2,1,2.5,1.3,3.8c0.2,0.7,0.3,1.3,0.3,2c0,0.7,0,1.4-0.2,2
			c-0.1,0.3-0.3,0.6-0.6,0.9c-0.3,0.2-0.6,0.4-0.9,0.5c-0.7,0.2-1.3,0.4-2,0.4c-1.4,0.1-2.7,0.1-4.1-0.1c-2.7-0.3-5.3-1-7.9-1.9
			c-0.6-0.2-1.3-0.5-1.9-0.7c-0.6-0.3-1.2-0.5-1.9-0.7c-1.3-0.4-2.6-0.5-3.9-0.5c-0.7,0-1.3,0.1-1.9,0.3c-0.6,0.1-1.2,0.4-1.8,0.6
			c-0.6,0.3-1.1,0.6-1.6,1c-0.5,0.4-1,0.9-1.3,1.4c-0.8,1-1.4,2.2-1.8,3.4c-0.4,1.2-0.7,2.5-0.9,3.8c-0.2,1.3-0.2,2.6-0.2,4
			c0,1.3,0.3,2.5,0.8,3.8c0.5,1.2,1,2.5,1.5,3.7c0.5,1.2,1,2.5,1.5,3.8c0.9,2.6,1.5,5.2,2,7.9c0.9,5.4,1,10.8,0.9,16.2
			c-0.4,10.8-2.1,21.5-4.2,32c-2,10.5-3.6,21.2-3.4,31.8c0.1,5.3,0.8,10.6,2,15.8c1.2,5.2,2.8,10.4,3.8,15.7
			c1,5.3,1.4,10.7,1.2,16.1c-0.1,2.7-0.3,5.4-0.5,8.1l-0.7,8c-0.9,10.7-1.5,21.4-1.5,32.2h-0.5c0-10.8,0.5-21.5,1.4-32.2l0.6-8
			c0.2-2.7,0.4-5.4,0.5-8c0.2-5.3-0.3-10.7-1.3-15.9c-1-5.2-2.7-10.3-4-15.6c-0.6-2.6-1.2-5.3-1.5-8c-0.4-2.7-0.6-5.4-0.7-8.1
			c-0.1-2.7,0-5.4,0.1-8.1c0.1-1.3,0.2-2.7,0.3-4c0.1-1.3,0.3-2.7,0.4-4c0.6-5.4,1.5-10.7,2.6-16c1.1-5.3,2.1-10.5,2.8-15.8
			c0.8-5.3,1.3-10.6,1.6-16c0.2-5.3,0.1-10.7-0.7-16c-0.4-2.6-1-5.2-1.9-7.7c-0.4-1.3-0.9-2.5-1.4-3.7c-0.5-1.2-1-2.5-1.5-3.8
			c-0.5-1.3-0.8-2.7-0.8-4.1c0-1.4,0.1-2.7,0.3-4.1c0.2-1.4,0.5-2.7,1-4c0.5-1.3,1.1-2.6,2-3.6c0.4-0.6,0.9-1,1.5-1.5
			c0.6-0.4,1.1-0.8,1.8-1.1c0.6-0.3,1.3-0.5,2-0.7c0.7-0.1,1.4-0.2,2.1-0.2c1.4,0,2.8,0.2,4.1,0.6c0.7,0.2,1.3,0.5,1.9,0.7
			c0.6,0.3,1.2,0.5,1.9,0.7c2.5,0.9,5.1,1.6,7.7,2c1.3,0.2,2.7,0.2,4,0.1c0.7-0.1,1.3-0.2,1.9-0.4c0.3-0.1,0.6-0.2,0.8-0.4
			c0.2-0.2,0.4-0.5,0.5-0.8c0.2-0.6,0.3-1.3,0.3-1.9c0-0.7-0.2-1.3-0.3-2c-0.3-1.3-0.8-2.6-1.3-3.8
			C207.4,226.5,206.1,224.1,204.7,221.8z" />
                            <path style="fill: ${hsl(color)}" d="M110.6,238.2c0.3-0.2,0.6-0.2,0.9-0.2c0.3,0,0.6,0,1,0.1c0.6,0.1,1.3,0.2,1.9,0.3c0.6,0.1,1.3,0.2,1.9,0.2
			c0.6,0,1.3-0.1,1.9-0.2c2.6-0.4,5.1-0.8,7.7-1c1.3-0.1,2.6-0.2,3.9,0c0.6,0.1,1.3,0.2,1.9,0.7c0.5,0.4,1,0.8,1.5,1.3
			c1.9,1.8,3.7,3.7,5.1,5.9c0.7,1.1,1.4,2.2,1.9,3.4c0.3,0.6,0.5,1.2,0.7,1.9c0.1,0.3,0.2,0.6,0.2,0.9c0.1,0.3,0.2,0.6,0.3,0.9
			c0.5,1.2,1.1,2.3,1.8,3.4c0.7,1.1,1.4,2.2,2.2,3.2c1.5,2.1,3.2,4.1,4.9,6c0.9,1,1.8,1.9,2.7,2.8c0.9,0.9,1.9,1.8,2.9,2.6
			c0.3,0.2,0.5,0.4,0.8,0.5c0.1,0.1,0.3,0.2,0.4,0.2c0.1,0,0.1,0.1,0.2,0.1l0.2,0.1c0.6,0.2,1.2,0.5,1.8,0.8c1.2,0.6,2.3,1.3,3.4,2
			c1.1,0.7,2.1,1.5,3.2,2.3c1,0.8,2,1.7,2.9,2.6c0.9,0.9,1.7,2,2.5,3.1c0.7,1.1,1.4,2.2,1.9,3.4c1.1,2.4,1.8,5,2,7.6
			c0,0.3,0.1,0.7,0.1,1c0,0.3,0,0.7,0,1c0,0.7,0,1.3-0.1,2c-0.1,1.3-0.3,2.6-0.4,3.9c-0.3,2.6-0.5,5.2-0.8,7.7
			c-0.2,2.6-0.4,5.2-0.5,7.8c-0.1,2.6-0.2,5.2-0.1,7.7c0.1,1.3,0.2,2.6,0.4,3.8c0,0.2,0.1,0.3,0.1,0.5c0,0.2,0.1,0.3,0.1,0.4
			c0,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.1,0.3,0.2,0.4c0.3,0.6,0.6,1.1,0.9,1.7c1.3,2.2,2.6,4.5,3.8,6.8c2.5,4.6,4.5,9.4,6.1,14.5
			c1.5,5,2.5,10.2,2.9,15.4c0.1,0.7,0.1,1.3,0.1,2c0,0.6,0.1,1.3,0.1,2c0,1.3-0.1,2.7-0.3,4c-0.4,2.6-1,5.2-1.6,7.7
			c-1.3,5.1-2.8,10-4.2,15c-1.4,5-2.7,10-3.8,15.1c-2.2,10.1-3.5,20.4-3.5,30.7h-2.4c0-10.5,1.5-20.9,3.9-31.1
			c1.2-5.1,2.5-10.1,4-15.1c1.4-5,3-10,4.3-14.9c0.7-2.5,1.3-5,1.7-7.5c0.2-1.3,0.3-2.5,0.4-3.8c0-0.6,0-1.3,0-1.9
			c0-0.6,0-1.3-0.1-1.9c-0.3-5.1-1.2-10.2-2.7-15.1c-1.5-4.9-3.5-9.7-5.8-14.3c-1.2-2.3-2.5-4.5-3.7-6.8c-0.3-0.6-0.6-1.2-0.9-1.8
			c-0.1-0.2-0.1-0.3-0.2-0.5c-0.1-0.2-0.1-0.3-0.2-0.5c-0.1-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.5c-0.3-1.3-0.3-2.6-0.4-4
			c-0.1-2.6,0-5.2,0.1-7.8c0.1-2.6,0.3-5.2,0.6-7.8c0.2-2.6,0.5-5.2,0.8-7.8c0.1-1.3,0.3-2.6,0.5-3.9c0.1-0.6,0.1-1.3,0.1-1.9
			c0-0.3,0-0.6,0-1c0-0.3,0-0.6-0.1-1c-0.2-2.5-0.8-5-1.9-7.4c-0.5-1.2-1.1-2.3-1.9-3.3c-0.7-1-1.5-2.1-2.4-3
			c-0.9-0.9-1.8-1.8-2.9-2.6c-1-0.8-2-1.6-3.1-2.3c-1.1-0.7-2.2-1.4-3.3-2c-0.6-0.3-1.1-0.6-1.7-0.8l-0.2-0.1
			c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.3-0.2-0.5-0.2c-0.3-0.2-0.6-0.4-0.8-0.6c-1-0.8-2-1.7-2.9-2.6c-0.9-0.9-1.8-1.9-2.7-2.9
			c-1.7-2-3.4-4-4.9-6.1c-0.8-1.1-1.5-2.1-2.2-3.2c-0.7-1.1-1.3-2.3-1.8-3.5c-0.1-0.3-0.2-0.6-0.3-0.9c-0.1-0.3-0.1-0.6-0.2-0.9
			c-0.2-0.6-0.4-1.2-0.6-1.8c-0.5-1.2-1.1-2.3-1.9-3.4c-1.4-2.1-3.2-4.1-5.1-5.9c-0.5-0.4-1-0.9-1.5-1.3c-0.5-0.4-1.1-0.5-1.8-0.6
			c-1.3-0.2-2.6-0.1-3.9,0c-2.6,0.2-5.2,0.6-7.7,1c-0.6,0.1-1.3,0.2-1.9,0.2c-0.7,0-1.3-0.1-1.9-0.2c-0.6-0.1-1.3-0.2-1.9-0.3
			c-0.3,0-0.6-0.1-1-0.1C111.2,238,110.8,238,110.6,238.2z" />
                            <g>
                                <path style="fill: ${hsl(color)}"
                                    d="M225.2,227.3c0.4,0.8,1.1,1.5,1.8,1.9c0.8,0.5,1.6,0.9,2.4,1.2c1.7,0.6,3.5,1,5.2,1.4
				c3.6,0.7,7.2,1.2,10.7,1.9c1.8,0.4,3.6,0.8,5.3,1.5c0.8,0.4,1.7,0.8,2.3,1.6c0.1,0.2,0.3,0.4,0.4,0.7c0.1,0.2,0.1,0.5,0.2,0.7
				c0.1,0.5,0.1,0.9,0.2,1.4c0.1,1.8,0,3.7-0.2,5.5c-0.1,1.8-0.3,3.6-0.6,5.4c-0.9,7.2-2,14.4-2.9,21.6c-0.5,3.6-1,7.2-1.4,10.8
				c-0.2,1.8-0.4,3.6-0.5,5.4c-0.1,1.8-0.2,3.6-0.1,5.4c0.1,0.9,0.2,1.7,0.5,2.5c0.3,0.8,0.7,1.6,1.1,2.4c0.8,1.6,1.7,3.2,2.6,4.7
				c1.9,3.1,4,6,6.4,8.6c2.4,2.7,5.1,5.1,8,7.2c1.5,1,3,2,4.5,2.9c1.6,0.9,3.1,1.8,4.7,2.7c6.3,3.5,12.8,6.8,19.7,8.6
				c6.9,1.9,14.2,2.4,21.4,2.6l0.3,0l0.2,0.2c2.2,1.9,4.8,3.3,7.4,4.4c2.7,1.2,5.5,2.1,8.3,2.9c5.7,1.6,11.5,2.7,17.3,3.5
				c5.8,0.8,11.7,1.4,17.6,1.8c2.9,0.2,5.9,0.4,8.9,0.5c0.4,0,0.7,0,1.1,0.1l1.1,0.1l2.2,0.2l4.4,0.4c11.8,1.1,23.6,2.2,35.4,3.3
				l8.8,0.9l4.4,0.5l2.2,0.2c0.7,0.1,1.5,0.2,2.2,0.3c1.4,0.2,2.9,0.2,4.3,0.1c1.5-0.1,2.9-0.2,4.4-0.3c1.5-0.1,2.9-0.3,4.4-0.3
				c0.4,0,0.8-0.1,1.2,0c0.4,0.1,0.8,0.2,1.2,0.3c0.7,0.2,1.4,0.6,2.1,0.9c0.7,0.3,1.3,0.7,2,1.1c0.3,0.2,0.6,0.4,0.9,0.7
				c0.1,0.1,0.2,0.1,0.3,0.3c0,0,0.1,0.1,0.1,0.2c0,0.1-0.1,0.3-0.2,0.4c-0.2,0.1-0.2,0.1-0.3,0.1c-0.2,0-0.4,0.1-0.6,0.1
				c-1.5,0-3,0-4.5,0c-0.7,0-1.5,0-2.2,0c-0.7,0-1.5,0-2.1,0.1c-0.6,0.1-1.3,0.5-1.8,0.9c-0.6,0.4-1.1,0.9-1.7,1.4
				c-0.3,0.2-0.6,0.5-1,0.7c0,0-0.1,0-0.2,0.1c-0.1,0-0.1,0-0.2,0.1c-0.2,0-0.3,0-0.4,0c-0.2-0.1-0.4-0.2-0.6-0.3
				c-0.7-0.4-1.2-1-1.8-1.5c-0.3-0.3-0.5-0.5-0.8-0.8c-0.1-0.1-0.3-0.2-0.4-0.3c0,0,0,0,0,0c0,0,0,0,0,0l-0.1,0l-0.3,0
				c-0.7,0-1.5,0-2.2,0c-3,0-5.9,0.1-8.9,0.3c-5.9,0.2-11.8,0.5-17.7,1c-2.9,0.2-5.9,0.5-8.8,1c-0.7,0.1-1.4,0.3-2.2,0.5
				c-0.7,0.2-1.5,0.3-2.2,0.5c-1.5,0.3-2.9,0.5-4.4,0.7c-1.5,0.2-2.9,0.4-4.4,0.5c-1.5,0.1-3,0.2-4.5,0.1c-0.4,0-0.7-0.1-1.1-0.1
				c-0.4-0.1-0.8-0.2-1.1-0.4c-0.2-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.3-0.1-0.5-0.2c-0.3-0.1-0.7-0.1-1.1-0.1c-0.7,0-1.5,0.1-2.2,0.2
				c-0.4,0.1-0.7,0.2-1,0.4c-0.3,0.2-0.6,0.3-0.8,0.6c-0.2,0.3-0.2,0.6,0.1,0.8c0.2,0.3,0.5,0.5,0.8,0.8c0.5,0.5,1,1.1,1.5,1.6
				c1,1.1,1.9,2.3,2.8,3.4c1.8,2.4,3.3,5,4.5,7.7c1.2,2.7,2.2,5.5,2.9,8.4c0.7,2.9,1.1,5.8,1.3,8.8c0.4,5.9-0.3,11.9-1.6,17.6
				c1.3-5.8,1.9-11.7,1.5-17.6c-0.2-3-0.6-5.9-1.3-8.8c-0.7-2.9-1.7-5.7-2.9-8.4c-1.2-2.7-2.8-5.2-4.5-7.6c-0.9-1.2-1.8-2.3-2.8-3.4
				c-0.5-0.5-1-1.1-1.5-1.6c-0.3-0.3-0.5-0.5-0.8-0.8c-0.1-0.1-0.3-0.3-0.3-0.6c0-0.2,0.1-0.5,0.2-0.6c0.3-0.3,0.6-0.5,0.9-0.7
				c0.3-0.2,0.7-0.3,1.1-0.4c0.7-0.2,1.5-0.3,2.2-0.3c0.4,0,0.8,0.1,1.1,0.2c0.2,0.1,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.3,0.5,0.3
				c0.3,0.2,0.6,0.3,1,0.3c0.4,0.1,0.7,0.1,1.1,0.1c1.5,0.1,2.9,0,4.4-0.1c1.5-0.1,2.9-0.3,4.4-0.5c1.5-0.2,2.9-0.5,4.4-0.8
				c0.7-0.1,1.4-0.3,2.2-0.5c0.7-0.2,1.4-0.4,2.2-0.5c2.9-0.5,5.9-0.8,8.9-1c5.9-0.5,11.8-0.8,17.8-1.1c3-0.1,5.9-0.2,8.9-0.3
				c0.7,0,1.5,0,2.2,0l0.3,0l0.2,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1,0.1c0.2,0.1,0.4,0.3,0.5,0.4c0.3,0.3,0.5,0.5,0.8,0.8
				c0.5,0.5,1.1,1,1.6,1.4c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0.3-0.2,0.6-0.4,0.8-0.6
				c0.6-0.5,1.1-1,1.8-1.4c0.6-0.4,1.3-0.8,2.1-1c0.8-0.1,1.5-0.1,2.3-0.2c0.7,0,1.5,0,2.2,0c1.5,0,3,0.1,4.4,0c0.2,0,0.4,0,0.5,0
				c0,0,0.1,0,0,0c0,0-0.2,0.2-0.1,0.3c0,0.1,0,0.1,0,0.1c0,0,0-0.1-0.1-0.1c-0.2-0.2-0.5-0.4-0.8-0.6c-0.6-0.4-1.2-0.8-1.9-1.1
				c-0.6-0.3-1.3-0.6-2-0.8c-0.3-0.1-0.7-0.2-1-0.2c-0.3,0-0.7,0-1,0c-1.5,0.1-2.9,0.2-4.4,0.4c-1.5,0.1-3,0.2-4.4,0.3
				c-1.5,0.1-3,0.2-4.5-0.1c-0.7-0.1-1.4-0.2-2.2-0.3l-2.2-0.2l-4.4-0.4l-8.8-0.8c-11.8-1.1-23.6-2.1-35.4-3.2l-4.4-0.4l-2.2-0.2
				l-1.1-0.1c-0.3,0-0.7-0.1-1.1-0.1c-3-0.1-5.9-0.2-8.9-0.4c-5.9-0.4-11.8-1-17.7-1.8c-5.9-0.8-11.8-1.9-17.5-3.4
				c-2.9-0.8-5.7-1.7-8.5-2.9c-2.8-1.2-5.5-2.6-7.8-4.6l0.4,0.2c-3.6-0.1-7.3-0.3-10.9-0.6c-3.6-0.4-7.3-1-10.8-1.9
				c-3.6-0.9-7-2.3-10.3-3.8c-3.3-1.5-6.6-3.2-9.7-5c-1.6-0.9-3.2-1.8-4.7-2.7c-1.6-0.9-3.2-1.9-4.6-3c-3-2.2-5.7-4.7-8.1-7.4
				c-2.4-2.7-4.6-5.7-6.5-8.9c-0.9-1.6-1.8-3.2-2.6-4.8c-0.4-0.8-0.8-1.7-1.1-2.5c-0.4-0.9-0.5-1.9-0.5-2.8c-0.1-1.9,0-3.7,0.1-5.5
				c0.1-1.8,0.3-3.6,0.5-5.4c0.4-3.6,0.9-7.2,1.5-10.8c1.1-7.2,2.3-14.3,3.2-21.5c0.2-1.8,0.4-3.6,0.6-5.4c0.2-1.8,0.3-3.6,0.2-5.4
				c0-0.4-0.1-0.9-0.1-1.3c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.2-0.4-0.3-0.5c-0.5-0.7-1.3-1.1-2.1-1.5c-1.6-0.7-3.4-1.2-5.1-1.6
				c-3.5-0.8-7.1-1.3-10.7-2.1c-1.8-0.4-3.5-0.8-5.2-1.5c-0.8-0.3-1.7-0.7-2.4-1.2C226.3,228.8,225.6,228.1,225.2,227.3z" />
                            </g>
                            <g>
                                <path style="fill: ${hsl(color)}" d="M91.6,246.8c0.4,0.4,0.9,0.6,1.4,0.7c0.5,0.1,1,0.2,1.5,0.3c1,0.1,2.1,0.2,3.1,0.2c2.1,0,4.2-0.1,6.3-0.2
				c1,0,2.1,0,3.2,0.2c0.3,0.1,0.5,0.2,0.8,0.4c0.2,0.2,0.4,0.3,0.6,0.4c0.5,0.2,1,0.3,1.5,0.5c2,0.4,4.1,0.6,6.2,0.8
				c1,0.1,2.1,0.3,3.1,0.6c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.2,0.1,0.3,0.1c0.2,0,0.5,0,0.8,0.1c0.5,0,1.1,0.1,1.6,0.2
				c2.1,0.3,4.1,1.3,5.9,2.3c3.6,2.2,6.8,4.9,9.9,7.8c3,2.9,5.9,6,8.6,9.2c2.8,3.2,5.4,6.4,8,9.7c2.6,3.3,5.1,6.7,7.6,10
				c2.5,3.4,4.9,6.8,7.3,10.3c-2.4-3.4-4.9-6.8-7.4-10.1c-2.5-3.4-5.1-6.7-7.7-9.9c-5.2-6.5-10.6-13-16.7-18.7
				c-3-2.9-6.2-5.6-9.8-7.8c-1.8-1.1-3.7-1.9-5.7-2.3c-0.5-0.1-1-0.1-1.5-0.2c-0.3,0-0.5,0-0.8-0.1c-0.1,0-0.3,0-0.4-0.1
				c-0.1-0.1-0.2-0.1-0.4-0.1c-1-0.3-2-0.5-3-0.6c-2.1-0.3-4.2-0.5-6.2-0.9c-0.5-0.1-1-0.3-1.5-0.5c-0.2-0.1-0.5-0.3-0.7-0.5
				c-0.2-0.2-0.4-0.2-0.6-0.3c-1-0.2-2.1-0.2-3.1-0.3c-2.1,0-4.2,0.1-6.3,0.1c-1,0-2.1-0.1-3.1-0.2c-0.5-0.1-1-0.2-1.5-0.3
				C92.4,247.4,91.9,247.2,91.6,246.8z" />
                            </g>
                            <g>
                                <path style="fill: ${hsl(color)}" d="M189.2,260.9c-0.1,2.1,0.3,4.2,0.7,6.3c0.5,2.1,1.1,4.1,1.9,6.1c1.5,3.9,3.5,7.7,5.8,11.2
				c1.2,1.7,2.5,3.4,3.9,5c0.7,0.8,1.4,1.5,2.2,2.3l2.3,2.3c3,3.1,5.9,6.2,8.5,9.7c2.6,3.4,4.9,7.1,6.6,11.1c1.7,4,2.7,8.4,2.3,12.7
				c-0.1,1.1-0.3,2.2-0.5,3.2c-0.2,1-0.4,2.1-0.6,3.1c-0.4,2.1-0.9,4.2-1.4,6.2c-0.5,2.1-1.1,4.1-1.7,6.2c-0.6,2-1.3,4.1-2.1,6
				c1.3-4,2.3-8.2,3.1-12.4c0.4-2.1,0.8-4.2,1.2-6.3l0.5-3.1c0.2-1.1,0.3-2.1,0.4-3.1c0.2-4.2-0.8-8.3-2.5-12.1
				c-1.7-3.8-3.9-7.4-6.5-10.8c-2.5-3.4-5.4-6.5-8.3-9.6l-2.2-2.3c-0.7-0.7-1.5-1.5-2.2-2.4c-1.4-1.6-2.7-3.4-3.8-5.2
				c-2.3-3.6-4.2-7.5-5.5-11.6c-0.7-2-1.2-4.1-1.6-6.2C189.2,265.2,189,263.1,189.2,260.9z" />
                            </g>
                            <g>
                                <path style="fill: ${hsl(color)}" d="M185.3,176c-1.2,2.2-2.2,4.4-3.2,6.7c-0.5,1.1-0.9,2.3-1.3,3.4c-0.4,1.2-0.7,2.3-0.8,3.5
				c-0.1,1.1,0,2.2,0.3,3.3c0.3,1.1,0.8,2.2,1.2,3.4c0.4,1.2,0.8,2.4,1.1,3.8c0.2,1.3,0.3,2.7,0.1,4c-0.1,1.3-0.4,2.6-0.8,3.9
				l-0.2,0.8c0,0.3-0.1,0.5-0.1,0.8c0,0.3,0,0.5,0,0.8c0,0.3,0,0.5,0,0.8c0.2,2.2,1.1,4.5,2.1,6.6c2.1,4.3,5,8.3,8.1,12.1l-0.5-0.2
				c0.8,0.1,1.7,0.1,2.5,0.1c1.1,0,2.2,0,3.4,0c0.8,0,1.7-0.1,2.5-0.2c0.9-0.1,1.9-0.3,2.7-0.7c-0.8,0.5-1.7,0.9-2.6,1.1
				c-0.9,0.3-1.9,0.5-2.8,0.6c-0.9,0.1-1.9,0.2-2.9,0.3c-1,0.1-1.9,0.1-2.9,0.1l-0.3,0l-0.2-0.2c-1.8-1.8-3.4-3.7-5-5.7
				c-1.5-2-2.9-4.1-4.1-6.4c-1.2-2.3-2.2-4.7-2.5-7.4c0-0.3,0-0.7-0.1-1c0-0.3,0-0.7,0-1c0.1-0.4,0.1-0.7,0.2-1.1l0.3-1l0.2-0.8
				l0.1-0.4l0.1-0.4l0.2-0.8c0.1-0.3,0.1-0.6,0.1-0.9c0.1-1.1,0.1-2.3,0-3.4c-0.2-1.1-0.5-2.3-0.8-3.4c-0.4-1.2-0.8-2.4-1.1-3.6
				c-0.3-1.3-0.4-2.7-0.1-4l0.2-1c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.3,0.2-0.6,0.4-0.9
				c0.5-1.2,1.1-2.3,1.7-3.4C182.4,180.1,183.8,178,185.3,176z" />
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <g>

                                            <rect x="183.5" y="131.2"
                                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -51.5691 176.3496)"
                                                style="fill: ${hsl(color)}" width="7.1" height="38.4" />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <rect x="212.8" y="119.2" style="fill: ${hsl(color)}" width="7.1" height="38.4" />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>

                                            <rect x="226.4" y="146.9"
                                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -34.4206 217.7512)"
                                                style="fill: ${hsl(color)}" width="38.4" height="7.1" />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <rect x="238.4" y="176" style="fill: ${hsl(color)}" width="38.4" height="7.1" />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>

                                            <rect x="242.1" y="189.8"
                                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -75.8203 234.8996)"
                                                style="fill: ${hsl(color)}" width="7.1" height="38.4" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <circle style="fill: ${hsl(color)}" cx="216.1" cy="179.8" r="12.3" />
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path style="fill: ${hsl(color)}" d="M262.6,242l-0.3-0.4c19.5-14.5,31.1-37.6,31.1-61.9c0-42.5-34.6-77.1-77.1-77.1s-77.1,34.6-77.1,77.1
					c0,24.2,11,46.5,30.2,61.2l-0.3,0.4c-19.3-14.8-30.4-37.3-30.4-61.6c0-42.8,34.8-77.5,77.5-77.5s77.5,34.8,77.5,77.5
					c0,12.5-2.9,24.4-8.5,35.4C280,225.6,272.1,234.9,262.6,242z" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path style="fill: ${hsl(color)}" d="M271.3,286.5L269,282c38.2-19.8,62-58.8,62-101.9c0-63.2-51.4-114.6-114.6-114.6s-114.6,51.4-114.6,114.6
					c0,14.3,2.6,28.3,7.8,41.6l-4.7,1.8c-5.4-13.8-8.1-28.4-8.1-43.4c0-32,12.5-62,35.1-84.6s52.7-35.1,84.6-35.1s62,12.5,84.6,35.1
					s35.1,52.7,35.1,84.6c0,22.4-6.2,44.2-18,63.1C306.7,261.6,290.5,276.6,271.3,286.5z" />
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <polygon style="fill: ${hsl(color)}"
                                    points="57.8,245.3 57.8,245.7 46.9,245.7 46.9,239.6 49.3,239.6 49.3,245.3 			" />
                            </g>
                        </g>
                        <g>
                            <circle style="fill: ${hsl(color)}" cx="120.4" cy="242.9" r="2.8" />
                        </g>
                    </g>
                </svg>
            `
    );
}

function hsl(hue) {
    return `hsl(${hue}deg, 100%, 50%, 33%)`;
}

function randomHue() {
    let output = [];
    let mainColor = Math.random() * 360;
    let zeroColor = mainColor - 120;
    if (zeroColor < 0) zeroColor = zeroColor + 360;
    let secondColor = mainColor + 120;
    if (secondColor > 360) secondColor = secondColor - 360;
    return output = [zeroColor, mainColor, secondColor];
}

// Анимация росписи.
let textContent = 'dots';
const rabota1 = ['R', 'a', 'b', 'o', 't', 'a', '1', '!']

function timing(i) {
    return 333 * Math.pow((i + 1), 1 / 3);
}

function rabota1Ani(value) {
    nodeLetters.forEach((letter, i = 0) => {
        setTimeout(() => {
            if (value == 'letters') {
                letter.innerHTML = rabota1[i];
                textStyleAnimation(letter);
            } else if (value == 'dots') {
                letter.innerHTML = '*';
                textStyleAnimation(letter, -1);
            }
            i++;
        }, timing(i));
    });
}

function textStyleAnimation(letter, direction) {
    if (!direction) {
        let shadow = 0;
        let createShadowInterval = setInterval(() => {
            shadow = shadow + 0.1;
            // letter.style.textShadow = `${shadow}px ${shadow}px red`;
            letter.style.margin = `-${shadow}px ${shadow}px ${shadow}px -${shadow}px`;
            letter.style.textShadow = `${shadow}px ${shadow}px 1px rgba(0, 0, 0, 33%)`;
            if (shadow >= 1.7) clearInterval(createShadowInterval);
        }, 3);
    } else {
        let shadow = 1.7;
        let deleteShadowInterval = setInterval(() => {
            shadow = shadow - 0.1;
            letter.style.margin = `-${shadow}px ${shadow}px ${shadow}px -${shadow}px`;
            letter.style.textShadow = `${shadow}px ${shadow}px 0 rgba(0, 0, 0, 33%)`;
            if (shadow <= 0) {
                clearInterval(deleteShadowInterval);
                letter.style.margin = `0px 0px 0px 0px`;
                letter.style.textShadow = `none`;
            };
        }, 3);
    }

}

//Смена букв.
let state = 'dots';

function dotsToLetters(value) {
    if (value == 'letters') {
        rabota1Ani(value);
        state = 'letters';
    } else if (value == 'dots') {
        rabota1Ani(value);
        state = 'dots';
    }
}

function setMargin(obj, layer, direction) {
    let amount;
    if (direction == 'horizontal') {
        amount = 'x';
        if (obj[amount + layer] >= 0) obj[obj.colors[layer]].style.marginRight = -obj[amount + layer] + 'px';
        else obj[obj.colors[layer]].style.marginLeft = obj[amount + layer] + 'px';
    } else if (direction == 'vertical') {
        amount = 'y';
        if (obj[amount + layer] >= 0) obj[obj.colors[layer]].style.marginTop = -obj[amount + layer] + 'px';
        else obj[obj.colors[layer]].style.marginBottom = obj[amount + layer] + 'px';
    }

    // if (direction == 'top') obj[obj.colors[layer]].style.marginTop = -Math.abs(obj[amount + layer]) + 'px';
    // else if (direction == 'right') obj[obj.colors[layer]].style.marginRight = -Math.abs(obj[amount + layer]) + 'px';
    // else if (direction == 'bottom') obj[obj.colors[layer]].style.marginBottom = -Math.abs(obj[amount + layer]) + 'px';
    // else if (direction == 'left') obj[obj.colors[layer]].style.marginLeft = -Math.abs(obj[amount + layer]) + 'px';
}

class Layer {
    constructor() {
        this.zeroX = currentX;
        this.zeroY = currentY;

        this.x0 = 0;
        this.y0 = 0;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;

        this.opacity = 100;

        this.removeStart = false;
        this.shifted = false;

        //Создание трех векторов с рандомным цветом.
        this.colors = randomHue();
        for (let color of this.colors) {
            this[color] = document.createElement('div');
            this[color].className = 'goddess h' + Math.floor(color);
            this[color].innerHTML = createVector(color);
            container.appendChild(this[color]);
        }
    }
    move() {
        //Удаление слоя при бездействии.
        this.inactiveDelete = setTimeout(() => {
            if (!this.removeStart && this.sumDelta != 0 && this.sumDelta > (maxDelta / 3)) {
                this.delete();
                if (state == 'letters') {
                    dotsToLetters('dots');
                }
            }
        }, 333);

        // Управление положением слоя.
        this.deltaX = currentX - this.zeroX;
        this.deltaY = -(currentY - this.zeroY);
        this.sumDelta = Math.sqrt(this.deltaX ** 2 + this.deltaY ** 2)

        if (this.sumDelta < (maxDelta * 7)) {
            this.cosAlpha0 = Math.cos(Math.atan2(this.deltaY, this.deltaX));
            this.sinAlpha0 = Math.sin(Math.atan2(this.deltaY, this.deltaX));

            this.cosAlpha1 = Math.cos(Math.atan2(this.deltaY, this.deltaX) + Math.PI * 4 / 3);
            this.sinAlpha1 = Math.sin(Math.atan2(this.deltaY, this.deltaX) + Math.PI * 4 / 3);

            this.cosAlpha2 = Math.cos(Math.atan2(this.deltaY, this.deltaX) + Math.PI * 2 / 3);
            this.sinAlpha2 = Math.sin(Math.atan2(this.deltaY, this.deltaX) + Math.PI * 2 / 3);

            // this.x0 = Math.abs(this.x0 + this.deltaX) * this.cosAlpha0;
            this.x0 = Math.abs(this.deltaX) * this.cosAlpha0 + Math.abs(this.deltaY) * this.cosAlpha0;
            this.y0 = Math.abs(this.deltaY) * this.sinAlpha0 + Math.abs(this.deltaX) * this.cosAlpha0;

            this.x1 = Math.abs(this.deltaX) * this.cosAlpha1 + Math.abs(this.deltaY) * this.cosAlpha1;
            this.y1 = Math.abs(this.deltaY) * this.sinAlpha1 + Math.abs(this.deltaX) * this.sinAlpha1;

            this.x2 = Math.abs(this.deltaX) * this.cosAlpha2 + Math.abs(this.deltaY) * this.cosAlpha2;
            this.y2 = Math.abs(this.deltaY) * this.sinAlpha2 + Math.abs(this.deltaX) * this.sinAlpha2;


            setMargin(this, 0, 'horizontal');
            // setMargin(this, 0, 'vertical');

            setMargin(this, 1, 'horizontal');
            setMargin(this, 1, 'vertical');

            setMargin(this, 2, 'horizontal');
            setMargin(this, 2, 'vertical');

            // if (this.deltaX >= 0) {
            //     this.x1 = this.x1 + Math.cos(Math.PI / 3) * this.deltaX;
            //     this.y1 = this.y1 + Math.sin(Math.PI / 3) * this.deltaX;

            //     this.x2 = this.x2 + Math.cos(Math.PI / 3) * this.deltaX;
            //     this.y2 = this.y2 + Math.sin(Math.PI / 3) * this.deltaX;

            // } else if (this.deltaX < 0) {
            //     this.x1 = this.x1 + Math.cos(Math.PI / 3) * this.deltaX;
            //     this.y1 = this.y1 + Math.sin(Math.PI / 3) * this.deltaX;

            //     this.x2 = this.x2 + Math.cos(Math.PI / 3) * this.deltaX;
            //     this.y2 = this.y2 - Math.sin(Math.PI / 3) * this.deltaX;

            // }
            // if (this.deltaY >= 0) {
            //     this.x1 = this.x1 + Math.sin(Math.PI / 3) * this.deltaY;
            //     this.y1 = this.y1 - Math.cos(Math.PI / 3) * this.deltaY;

            //     this.x2 = this.x2 - Math.sin(Math.PI / 3) * this.deltaY;
            //     this.y2 = this.y2 - Math.cos(Math.PI / 3) * this.deltaY;
            // } else if (this.deltaY < 0) {
            //     this.x1 = this.x1 - Math.sin(Math.PI / 3) * this.deltaY;
            //     this.y1 = this.y1 + Math.cos(Math.PI / 3) * this.deltaY;

            //     this.x2 = this.x2 + Math.sin(Math.PI / 3) * this.deltaY;
            //     this.y2 = this.y2 - Math.cos(Math.PI / 3) * this.deltaY;
            // }
        }

        // Удалине слоя при превышении дельты.
        if (this.sumDelta >= maxDelta) {
            this.delete();
            if (state == 'dots') {
                dotsToLetters('letters');
            }
        }
    }
    delete() {
        clearTimeout(this.inactiveDelete);
        if (!this.removeStart && layers.length < 3) {
            createNewLayer();
            this.removeStart = true;
            for (let color of this.colors) {
                let opacityAnimation = setInterval(() => {
                    this[color].style.opacity = this.opacity + '%';
                    this.opacity--;
                    if (this.opacity < 0) {
                        clearInterval(opacityAnimation);
                        container.removeChild(this[color]);
                        if (!this.shifted) {
                            this.shifted = !this.shifted;
                            layers.shift();
                        }
                    }
                }, 7);
            }
            setTimeout(() => {
                if (layers.length <= 1 && state == 'letters') dotsToLetters('dots');
            }, 777)
        }
    }
}

function createNewLayer() {
    layers.push(new Layer);
}

function setZeroPoints(event) {
    if (event.gamma || event.beta) {
        currentX = Math.abs(event.gamma);
        currentY = Math.abs(event.beta);
        window.removeEventListener('deviceorientation', setZeroPoints);
    } else {
        currentX = event.clientX;
        currentY = event.clientY;
        window.addEventListener('mousemove', setZeroPoints);
    }
}

layers = [new Layer];

function handleOrientation(event) {
    if (event.gamma || event.beta) {
        currentX = Math.abs(event.gamma);
        currentY = Math.abs(event.beta - 90);

    } else {
        currentX = event.clientX / mouseSensivity;
        currentY = event.clientY / mouseSensivity;
    }

    for (let layer of layers) {
        layer.move();
    }
}

window.addEventListener('mousemove', setZeroPoints);
window.addEventListener('mousemove', handleOrientation);

window.addEventListener('deviceorientation', setZeroPoints);
window.addEventListener('deviceorientation', handleOrientation);