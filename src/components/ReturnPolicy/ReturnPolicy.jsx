import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";
function ReturnPolicy() {

  return (
    <Container fluid className="returnPolicy-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          Return Policy
        </h1>
        <Row className='returnPolicy-description'>
          <Col style={{ color: 'white' }}>
            <div class="returnPolicy-text">
              <p>YouVend accept returns and exchanges under these terms. You can return YouVend iteam within 30 days of your purchase with receipt or proof of purchase. If 30 days or more have passed since your purchase, we cannot offer you a refund or an exchange.

                Upon receipt of the returned item, we will fully examine it and notify you via email, within a reasonable period of time, whether you are entitled to a return. If you are entitled to a return, we will refund your purchase price and a credit will automatically be applied to your original method of payment.

                Only regular priced items may be refunded. Sale items are non-refundable.

                To follow-up on the status of your return, please contact us at [•].</p>

                <p><strong>Exchanges</strong></p>

                <p>We only exchange goods if they are defective or damaged. In circumstances where you consider that a product is defective, you should promptly contact us at [•] with details of the product and the defect. You can send the item you consider defective to:</p>

                 <p>[Address]</p>


                <p>Upon receipt of the returned product, we will fully examine it and notify you via e-mail, within a reasonable period of time, whether you are entitled to a replacement as a result of the defect. If you are eligible, we will send you a replacement product.</p>


                <p><strong>Exceptions</strong></p>

                <p>Some items are non-refundable and non-exchangeable. These include: [list items]</p>


                <p><strong>Shipping</strong></p> 

                <p>To return the item you purchased, please mail it to:</p>



                <p>[Address]</p>



                <p>Refunds do not include any shipping and handling charges shown on the packaging slip or invoice. Shipping charges for all returns must be prepaid and insured by you. You are responsible for any loss or damage to hardware during shipment. We do not guarantee that we will receive your returned item. Shipping and handling charges are not refundable. Any amounts refunded will not include the cost of shipping.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ReturnPolicy;