import { Link, Box, Flex } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaFilm} from 'react-icons/fa'
import '../index.css'

const SocialMedia = () => {
    return (
        <Flex direction={'row'} mt={2} align={'center'} justify={'left'}> 
        <Link href="https://www.linkedin.com/in/aarushbedi/" mr={4}><FaLinkedin size={'25px'}/></Link>
        <Link href="https://github.com/AarushBedi" mx={4}><FaGithub size={'25px'}/></Link>
        <Link href="https://x.com/AarushBedi1" mx={4}><FaTwitter size={'25px'}/></Link>
        <Link href="mailto:aarush.bedi@emory.edu" mx={4}><EmailIcon boxSize={'25px'} /></Link>
        </Flex>
    );
};

export default SocialMedia;