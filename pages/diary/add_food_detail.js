import React from 'react'
import { useState } from "react";
import Link from 'next/link'
import { Button, Header, Modal } from 'semantic-ui-react';
import ImageUpload from '../../components/diary/meal_detail/ImageUpload';

const AddFoodDetail = (cart, setCart) => {

    const [products] = useState([]);

    const addToCart = (value) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
          (item) => value.name === item.name
        );
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          itemInCart = {
            ...value,
            quantity: 1,
          };
          newCart.push(itemInCart);
        }
        setCart(newCart);
    };
    
    // Modal
    const [open, setOpen] = React.useState(false)

    return (
        <div className="AddFood" style={{padding: 16}}>
            <div
                style={{
                display: "flex",
                justifyContent: "space-between",
                padding: '16px'
                }}
            >
                <div>
                    <span>아침</span>
                    {/* <a className="ui teal circular label"
                        onClick={() => navigateTo(PAGE_CART)}>
                    {getCartTotal()}
                    </a> */}
                </div>

                <Link href='/diary/add_food'>
                <button className="yellow ui button">
                    편집하기
                </button>
                </Link>
                
            </div>

            <div>
                <ImageUpload />
            </div>

            <div>
                총 카운트된 데이터들: 칼로리,탄,단,지 출력
            </div>

            <div className="ui middle aligned divided list" style={{ padding: 10 }}>
                {cart.map((product, index) => {
                return (
                    <div className="item"
                        key={index}
                        style={{padding: '8px'}}
                    >
                        <div style={{
                                textAlign: "left",
                                display: 'grid',
                                gridTemplateColumns: '9.5fr 0.5fr'}}
                        >
                            <div>
                                <Modal
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                open={open}
                                trigger={
                                    <div className="content"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div className="header">
                                            {product.name}
                                        <div className="description">{product.mfr} / {product.serve}gram</div>
                                        </div>
                                        <div className='right floated' style={{margin: '8px 10px 0 0'}}>{product.kcal}Kcal</div>
                                    </div>
                                }
                                >
                                <Modal.Header>영양 정보</Modal.Header>
                                <Modal.Content>
                                    <Modal.Description>
                                        <Header>{product.name}</Header>
                                        <p>
                                            선택 리스트 영양정보 나열
                                        </p>
                                    </Modal.Description>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='black' onClick={() => setOpen(false)}>
                                    Nope
                                    </Button>
                                    <Button
                                    content="Okay"
                                    labelPosition='right'
                                    icon='checkmark'
                                    onClick={() => setOpen(false)}
                                    positive
                                    />
                                </Modal.Actions>
                                </Modal>
                            </div>
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    )
}

export default AddFoodDetail
