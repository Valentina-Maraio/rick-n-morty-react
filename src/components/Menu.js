import React from 'react'
import logo from '../assets/logo.svg';
import { Navbar, Input, Divider } from '@nextui-org/react'

const Menu = () => {
    return (
        <div>
            <Navbar isBordered variant="floating">
                <Navbar.Brand>
                    <img src={logo} className="App-logo" alt="logo" href='/' />
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Link href="/">Home</Navbar.Link>
                    <Navbar.Link href="/rick">Rick</Navbar.Link>
                    <Navbar.Link href='/morty'>Morty</Navbar.Link>
                    <Navbar.Link href='fav'><i class="pi pi-heart"></i></Navbar.Link>
                    <Navbar.Item
                        css={{
                            "@xsMax": {
                                w: "100%",
                                jc: "center",
                            },
                        }}>
                        <Input
                            clearable
                            contentLeftStyling={false}
                            css={{
                                w: "100%",
                                "@xsMax": {
                                    mw: "300px",
                                },
                                "& .nextui-input-content--left": {
                                    h: "100%",
                                    ml: "$4",
                                    dflex: "center",
                                },
                            }}
                            placeholder="Search..." />
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
            <Divider />
        </div>
    )
}

export default Menu