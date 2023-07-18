function Category({ listCate }) {
    const listCategoryShow = listCate.map((category) =>
        <span className='badge text-bg-danger' style={{ marginLeft: '20px', marginTop: '15px', fontSize: '15px', fontWeight: '500' }}>
            {category}
        </span>
    );
    return (
        <>
            {listCategoryShow}
        </>
    );
}

export default Category
