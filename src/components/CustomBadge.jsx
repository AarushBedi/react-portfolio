import { Badge, HStack} from "@chakra-ui/react";

const CustomBadge = ({ tags, customSize }) => {
    return (
      <HStack spacing={2} align={'center'} justify={'center'}>
        {tags.map((tag, index) => (
          <Badge borderRadius={'md'} key={index} color={"teal.500"} fontSize={customSize}>
            {tag}
          </Badge>
        ))}
      </HStack>
    );
};

export default CustomBadge;