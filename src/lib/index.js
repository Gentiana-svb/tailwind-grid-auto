const plugin = require('tailwindcss/plugin')

const gridAuto = plugin(
	({ matchUtilities, theme }) => {
		matchUtilities(
			{
				'grid-auto': x => ({
					'grid-template-columns': `repeat(${x},auto)`
				})
			},
			{ values: theme('gridAuto') }
		)
	},
	{
		theme: {
			gridAuto: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				6: '6',
				7: '7',
				8: '8',
				9: '9'
			}
		}
	}
)

module.exports = gridAuto
