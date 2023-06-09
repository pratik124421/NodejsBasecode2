export enum Collections{
    UserDetailsCollections = "userdetailscollections",
    UserCollections = "usercollections",  
    QrCollections="qrcollections",
    CouponCodeCollections="couponcodecollections",
    ProductCollections="productcollections",
    QuotationCollections="quotationcollections",
    RefCodeCollections="refCodecollections",
    OrderCollections="ordercollections",
    LocationCollections = "locationcollections",
    ProductCategoryCollections = "productcategorycollections",
    ProductReviewCollections="ProductReviewCollections",
    TokenCollections = "TokenCollections"
}


export enum UserType{
    User="User",
    Admin="Admin"
} 


// column names Modelwise

export enum UserDetailsCollections{
    user_id="user_id",
    user_first_name="user_first_name",
    user_last_name="user_last_name",
    user_phone="user_phone",
    user_contry="user_contry",
    user_state="user_state",
    user_city="user_city",
    user_pincode="user_pincode",
    user_landmark="user_landmark",
    user_location="user_location",
    type="type",
    coordinates="coordinates"
} 

export enum ProductCategoryCollections{
    product_category="product_category",
    product_category_location="product_category_location",
}
export enum LocationCollections{
    location_contry="location_contry",
    location_state="location_state"
}
export enum OrderCollections{
    order_by="order_by",
    order_user_detail="order_user_detail",
    order_product="order_product",
    order_coupon_code_used="order_coupon_code_used",
    order_ref_code_used="order_ref_code_used",
    order_time="order_time",
    order_total_price="order_total_price",
    order_status="order_status",
    product_id="product_id",
    order_quantity="order_quantity",
    product_size_id="product_size_id"
}
export enum RefCodeCollections{
    ref_by="ref_by",
    ref_coupon_name="ref_coupon_name",
    ref_coupon_description="ref_coupon_description",
    ref_coupon_discount="ref_coupon_discount",
    ref_coupon_max_discount="ref_coupon_max_discount",
    ref_coupon_min_required_amount="ref_coupon_min_required_amount",
    ref_coupon_min_required_quantity="ref_coupon_min_required_quantity",
    ref_coupon_created_date="ref_coupon_created_date",
    ref_coupon_expire_date="ref_coupon_expire_date",
    ref_coupon_limit="ref_coupon_limit"
} 
export enum QuotationCollections{
    user_email="user_email",
    user_mobile="user_mobile",
    user_description="user_description"
} 
export enum ProductCollections{
    product_category_id="product_category_id",
    product_quantity="product_quantity",
    product_title="product_title",
    product_description="product_description",
    product_detail="product_detail",
    product_price="product_price",
    product_size="product_size",
    product_image_ids="product_image_ids",
    product_listed_by="product_listed_by",
    default="default",
    product_contry="product_contry",
    product_location="product_location",

} 

export enum ProductReviewCollections{
    product_id="product_id",
    user_id="user_id",
    product_rating="product_rating",
    product_description="product_description"
} 

export enum CouponCodeCollections{
    coupon_name="coupon_name",
    coupon_description="coupon_description",
    coupon_discount="coupon_discount",
    coupon_max_discount="coupon_max_discount",
    coupon_min_required_amount="coupon_min_required_amount",
    coupon_min_required_quantity="coupon_min_required_quantity",
    coupon_created_date="coupon_created_date",
    coupon_expire_date="coupon_expire_date",
    first_order_code="first_order_code",
    couponcode_country_id="couponcode_country_id"
} 

export enum UserCollections{
    user_email="user_email",
    user_password="user_password",
    user_type="user_type",
} 

export enum QrCollections{
    User="User",
    Admin="Admin"
} 

