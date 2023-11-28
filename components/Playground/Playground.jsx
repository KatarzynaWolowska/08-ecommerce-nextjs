import Button from '@/components/Button/Button'
import Wrapper from '@/components/Wrapper/Wrapper'

import BUTTON_VARIANTS from '@/constants/ButtonVariant'

const Playground = () => {
    return (
        <Wrapper>
            <Button>Primary</Button>
            <br />
            <Button variant={BUTTON_VARIANTS.secondary}>Secondary</Button>
            <br />
            <Button variant={BUTTON_VARIANTS.ghost}>Link</Button>
        </Wrapper>
    )
}

export default Playground
