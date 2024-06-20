import { Link, Box, Flex } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import '../index.css'

const SocialMedia = () => {
    return (
        <Flex direction={'row'} mt={2} align={'center'} justify={'left'}> 
        <Link href="https://www.linkedin.com/in/aarushbedi/" mx={4}><FaLinkedin size={'25px'}/></Link>
        <Link href="https://github.com/AarushBedi" mx={4}><FaGithub size={'25px'}/></Link>
        <Link href="https://x.com/AarushBedi1" mx={4}><FaTwitter size={'25px'}/></Link>
        </Flex>
    );
};

export default SocialMedia;