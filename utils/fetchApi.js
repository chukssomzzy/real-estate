import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url)=>{
  const {data} = await axios.get(url,{
 headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '3e8ce669e1msh6e6f63597ecb390p18cac9jsnc5cf2659e1f4',
  }
  });
  return data
  
}
