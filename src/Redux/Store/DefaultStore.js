import { KEY_STORAGE } from '../../Utils/consts'

export const auth = {
	token: JSON.parse(localStorage.getItem(KEY_STORAGE)) || null,
  loading: false
}

export const courses = [
	{
		name: 'ADS',
		projects: [
			{
				name: 'Jogue Limpo com o Eco e Peteco',
				description: 'Help dogs and abigeatos with PlayFair',
				images: [
					'https://pbs.twimg.com/profile_images/2205372946/image.jpg'
				]
			},
			{
				name: 'Eco e Pet com o PlayFairOsório',
				description: 'Imagina se alguém escreve Albatroz com z ou x',
				images: [
					'https://pbs.twimg.com/profile_images/2205372946/image.jpg'
				]
			}
		]
	},
	{
		name: 'TPG',
		projects: [
			{
				name: 'Maracutaias do Zubumafu',
				description: 'Você caiu',
				images: ['https://i.ytimg.com/vi/eYbCVD8f3-0/hqdefault.jpg']
			}
		]
	},
	{
		name: 'Letras',
		projects: []
	},
	{
		name: 'Matemática',
		projects: []
	}
]