import Link from 'next/link'
import categoriesStyles from '../../../styles/Categories.module.css'

function showCategories() {
    return (
        <div className={categoriesStyles.button}>
            <ul>
                <li>
                    <Link href="/recipe/list">
                    <a>전체</a>
                    </Link>
                </li>
                <li>
                    <Link href="/recipe/list/soup">
                    <a>국/탕/찌개</a>
                    </Link>                    
                </li>
                <li>
                    <Link href="recipe/list/grill">
                    <a>구이</a>
                    </Link>
                </li>
                <li>
                    <Link href="recipe/list/noodle">
                    <a>면/파스타</a>
                    </Link>
                </li>
                <li>
                    <Link href="recipe/list/rice">
                    <a>밥/볶음밥</a>
                    </Link>
                </li>
                <li>
                    <Link href="recipe/list/side">
                    <a>반찬</a>
                    </Link>
                </li>
                <li>
                    <Link href="recipe/list/kimchi">
                    <a>김치</a>
                    </Link>
                </li>
                <li>
                    <Link href="recipe/list/dessert">
                    <a>디저트</a>
                    </Link>
                </li>
                <li>
                    <Link href="recipe/list/etc">
                    <a>기타</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default showCategories;