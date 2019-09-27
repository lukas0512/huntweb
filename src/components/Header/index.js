import React from 'react';
import { Container } from './styles';
const Header = (props) => (
    <Container id="main-header">{props.titulo}</Container>
);

export default Header;