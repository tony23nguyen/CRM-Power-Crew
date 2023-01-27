import { Icon, IconButton, Select, Flex } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'


export default function Header(): any{
    
    return (
        <div>
            <nav>
               {/* each select box needs to be its own component - allow the creation of multiple 
               dropsdown from the user with defualt being the entire table*/}
            <Flex justify="space-between">
                <Select placeholder='Select workspace' w={12}>
                    <option value='option1'>Add</option>
                    <option value='option2'>Add+</option>
                    <option value='option3'>Add+</option>
                </Select>
                <Select placeholder='Select template'>
                    <option value='option1'>Default</option>
                    <option value='option2'>Add</option>
                    <option value='option3'>Add</option>
                </Select>
                
                <h3>User Name</h3>
                <IconButton width="50px" height="50px" aria-label='settings' icon={<SettingsIcon />} />
            </Flex>
            </nav>
        </div>
    )
}