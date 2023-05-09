/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,astro,js}'],
	theme: {
		screens: {
			'smm' : {'max': '639px'}, 
			// => @media (min-width: 20px) { ... }

			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			backgroundImage: {
				'hero': "url('/images/back5.png')"
			  },
			transitionProperty:{
				'appBar': 'transform 0.6s ease-out'
			},
			backgroundImage:{
				'blueback':"url('/images/backgroundCLIP.png')",
			},
			fontFamily:{
				'robot':'Roboto Condensed',
				'poppins':'Poppins',
				'lemon':['LEMON']
			},
			keyframes:{
				typing: {
					'0%': { width: 0 },
					'100%': { width: 450 }
				},
				blink_caret:{
					'0%, 100%': {'border-color':' transparent'},
					'50%' : {'border-color':' #ffb74d'},
				},
				back:{
					'100%':{
						'background-position':'2000px 0'
					},
				},
				translate:{
					'0%':{
						'transform':'translateY(50%)'
					},
					'100%':{
						'transform':' translateY(0)'
					}
				},
				opacity:{
					'0%':{
						'opacity':'0'
					},
					'100%':{
						'opacity':'1'
					}
				}
			},
			animation: {
				'typing-A':'typing 3s steps(30, end), blink_caret .5s step-end infinite',
				'back-A':'back 20s linear infinite',
				'about-A':'translate 1s ease-in-out, opacity 1s',
			},
		},
	},
	plugins: [],
}
