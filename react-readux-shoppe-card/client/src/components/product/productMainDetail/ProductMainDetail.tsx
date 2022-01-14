import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import LogoFree from "../../logo/LogoFree";
import { FaCarSide } from "react-icons/fa";
import "./ProductMainDetail.scss";

interface typeProductDetailProps {
  types: string[];
  title: string;
  price: number[];
  favorite: boolean;
  rating: number;
  peopleRate: number;
  peopleBought: number;
  quantity: number;
  discount: number;
  sizes: string[];
}
const ProductMainDetail: React.FC<typeProductDetailProps> = ({
  discount,
  types,
  title,
  price,
  favorite,
  rating,
  peopleRate,
  peopleBought,
  quantity,
  sizes,
}) => {
  const [placementInputTypes, setPlacementInputTypes] = useState<number>(-1);
  const handleChangeInputTypes = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setPlacementInputTypes(Number(e.target.name)) : setPlacementInputTypes(-1);
  };

  return (
    <>
      <div className="product__main--detail-content">
        <div className="product__main--detail-content_header">
          {favorite && (
            <span className="product__main--detail-content_header__favorite">Yêu thích</span>
          )}
          {title}
        </div>
        <div className="product__main--detail-content_rate">
          <div className="product__main--detail-content_rate__star">
            <span> {rating + ".0"}</span>
            <BsStarFill className="icon" />
            <BsStarFill className="icon" />
            <BsStarFill className="icon" />
            <BsStarFill className="icon" />
            <BsStarFill className="icon" />
          </div>
          <div className="product__main--detail-content_rate__people-rate">
            <span className="product__main--detail-content_rate__people-rate--amount">
              {peopleRate / 1000}K
            </span>
            <span className="product__main--detail-content_rate__people-rate--text"> Đánh giá</span>
          </div>
          <div className="product__main--detail-content_rate__people-buy">
            <span className="product__main--detail-content_rate__people-buy--amount">
              {peopleBought / 1000}K
            </span>
            <span className="product__main--detail-content_rate__people-buy--text">Đã bán</span>
          </div>
        </div>
        <div className="product__main--detail-content_post">
          <div className="product__main--detail-content_post__box">
            <div className="product__main--detail-content_post__box-price">
              <div className="product__main--detail-content_post__box-price--init">
                <span className="product__main--detail-content_post__box-price--init_first">
                  {price[0] - 0.001 + "đ"}
                </span>{" "}
                -{" "}
                <span className="product__main--detail-content_post__box-price--init_last">
                  {price[price.length - 1] - 0.001 + "đ"}
                </span>
              </div>
              <div className="product__main--detail-content_post__box-price--shell">
                <span className="product__main--detail-content_post__box-price--shell_first">
                  {String(price[0] * ((100 - discount) / 100) - 0.001)
                    .split(".")
                    .map((str: string, index: number) => {
                      if (index === 1) {
                        return str.padEnd(3, "0");
                      } else {
                        let result = "";
                        let i = str.length;
                        let placement = 0;
                        while (i !== 0) {
                          i--;
                          if (placement % 3 === 0 && placement !== 0) {
                            result = str[i] + "," + result;
                          } else result = str[i] + result;
                          placement++;
                        }
                        return result;
                      }
                    })
                    .join(".") + "đ"}
                </span>
                -
                <span className="product__main--detail-content_post__box-price--shell_last">
                  {String(price[price.length - 1] * ((100 - discount) / 100) - 0.001)
                    .split(".")
                    .map((str: string, index: number) => {
                      if (index === 1) {
                        return str.padEnd(3, "0");
                      } else {
                        let result = "";
                        let i = str.length;
                        let placement = 0;
                        while (i !== 0) {
                          i--;
                          if (placement % 3 === 0 && placement !== 0) {
                            result = str[i] + "," + result;
                          } else result = str[i] + result;
                          placement++;
                        }
                        return result;
                      }
                    })
                    .join(".") + " đ"}
                </span>
              </div>
              <div className="product__main--detail-content_post__box-price--discount">
                {discount}% GIẢM
              </div>
            </div>
            <div className="product__main--detail-content_post__box-text">
              <LogoFree className="product__main--detail-content_post__box-text--logo" />

              <div className="product__main--detail-content_post__box-text--left">
                <div className="product__main--detail-content_post__box-text--left_top">
                  Gì cũng rẻ
                </div>
                <div className="product__main--detail-content_post__box-text--left_bottom">
                  Giá tốt nhất so với các sản phẩm cùng loại trên shoppe!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__main--detail-content_movement">
          <div className="product__main--detail-content_movement__left">Vận chuyển</div>
          <div className="product__main--detail-content_movement__right">
            <div className="product__main--detail-content_movement__right-bonus">
              <img
                className="product__main--detail-content_movement__right-bonus--icon"
                alt="img"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/1cdd37339544d858f4d0ade5723cd477.png"
              />
              <div className="product__main--detail-content_movement__right-bonus--text">
                <p className="product__main--detail-content_movement__right-bonus--text_header">
                  Miễn phí vận chuyển
                </p>
                <p className="product__main--detail-content_movement__right-bonus--text_footer">
                  Miễn phí vận chuyển cho đơn hàng trên ₫50.000
                </p>
              </div>
            </div>
            <div className="product__main--detail-content_movement__right-street">
              <FaCarSide className="product__main--detail-content_movement__right-street--icon" />
              <div className="product__main--detail-content_movement__right-street--text">
                <p className="product__main--detail-content_movement__right-street--text_header">
                  Vận Chuyển Tới
                  <span> Option select</span>
                </p>
                <p className="product__main--detail-content_movement__right-street--text_footer">
                  Phí Vận Chuyển
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="product__main--detail-form">
        <div className="product__main--detail-form_type">
          <div className="product__main--detail-form_type__title">Loại</div>
          {types.map((type, index) => (
            <div key={index} className="form__chose">
              <input
                type="checkbox"
                name={String(index)}
                id={type}
                checked={placementInputTypes === index}
                className="form__chose--input"
                onChange={handleChangeInputTypes}
              />
              <label htmlFor={type} className="form__chose--label">
                {type}
              </label>
            </div>
          ))}
        </div>
        <div className="product__main--detail-form_size"></div>
        <div className="product__main--detail-form_quantity"></div>
        <div className="product__main--detail-form_add"></div>
      </form>
    </>
  );
};

export default ProductMainDetail;
