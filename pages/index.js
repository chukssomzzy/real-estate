import Link from 'next/link';
import Image from 'next/image'
import {Flex,Box,Text,Button} from "@chakra-ui/react"
import { baseUrl,fetchApi } from '../utils/fetchApi';
import Property from '../components/Property'

const Banner = ({purpose,imgUrl,title1,title2,desc1,desc2,buttonText,linkName}) => { 

  return(
  <section>
     <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10"> 
       {/*-- Banner Image --*/}
      <Image src={imgUrl} width={500} height={300} alt="banner" />
       {/*-- Box is a div container --*/}
       <Box p="5">
         {/*-- Contains pursose text --*/}
        <Text color="gray.500" fontSize="sm" fontWeight="meduim">
         {purpose}
        </Text>
         <Text fontSize="3xl" fontWeight="bold">
           {title1} <br />
           {title2}
          </Text>
         <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700"  fontWeight="meduim">
           {desc1} <br />
           {desc2}
          </Text>
         {/*--Button---*/}
         <Button fontSize="xl">
         <Link href={linkName}>{buttonText}</Link>
         </Button>
       </Box>
     </Flex>
    </section>
  )
}

const Home = ({propertiesForSale,propertiesForRent}) => { 

  return(
  <section>
    {/*--div container--*/}
  
    <Box>
      {/*--Banner1--*/} 
      <Banner purpose="Rent A Home" title1="Rental Home For" title2="Everyone" desc1="Explore Apartment, Villas, Home" desc2="and more" buttonText="Explore Renting" linkName="/search?purpose=for-rent" imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4" />
      {/*--flex container--*/}
      <Flex flexWrap="wrap">
  {
    /*--fetch the rent property and map over them*/
    propertiesForRent.map(property => <Property key={property.id} property={property}/>)

  }
      </Flex>
      {/*--Banner2--*/}
      <Banner purpose="Buy A Home" title1="Find, Buy, Own Your" title2="Dream Home" desc1="Explore Apartment, Villas, Home" desc2="and more" buttonText="Explore Renting" linkName="/search?purpose=for-sale" imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008" />
  
    {/*---flex container---*/}
     <Flex flexWrap="wrap">
    {
    /*--map over the fetched property and return a component--*/
      propertiesForSale.map(property =><Property key={property.id} property={property}/>)
    }
       </Flex>
      </Box>
    </section>
  )
}

export async function getStaticProps(){
   const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purp  ose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
    
}
}

export default Home

