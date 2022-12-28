/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Text, Button, Image, Grid, Navbar, Modal, Input, Row, Checkbox } from "@nextui-org/react";
import { Mail } from "../pages/Mail";
import { Password } from "../pages/Password";

import Link from "next/link";


export default function CustomNavbar() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <>
            <Navbar isBordered height="60px" variant="floating">
                <Navbar.Brand>
                    <img src="https://cdn.discordapp.com/attachments/1005377188868149259/1057471341906898984/2.png" width="36"></img>
                    <Text style={{
                        paddingLeft: "5px",
                    }} b color="inherit" hideIn="xs">
                        Inter's Web!
                    </Text>
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Item>
                        <div onClick={handler}>Sign In</div>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Link href="/auth/signup">
                            <Button auto>
                                Sign Up
                            </Button>
                        </Link>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size="$xl">
                        Welcome to
                        <Text style={{
                            paddingLeft: "5px",
                        }} b>
                            NextUI
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        contentLeft={<Mail fill="currentColor" />}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<Password fill="currentColor" />}
                    />
                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button auto onClick={closeHandler}>
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}