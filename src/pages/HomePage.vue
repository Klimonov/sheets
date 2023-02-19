<script setup lang="ts">
    import Header from 'components/home/Header.vue'
    const tables = [
        { name: 'Список дел' },
        { name: 'Годовой бюджет' },
        { name: 'Месячный бюджет' },
    ]

    const previousTables = [
        { name: 'Все маркеты', author: 'я', date: '21 дек. 2022г.'},
        { name: 'Дежурства', author: 'я', date: '21 дек. 2022г.'},
        { name: 'График', author: 'Виталий', date: '21 дек. 2022г.'},
        { name: 'Кубок Края', author: 'Ирина', date: '21 дек. 2022г.'},
        { name: 'Бахчисарай', author: 'я', date: '21 дек. 2022г.'},
        { name: 'Атлас', author: 'Михаил', date: '21 дек. 2022г.'},
        { name: 'Почта', author: 'Людмила', date: '21 дек. 2022г.'},
        { name: 'Переход на в3', author: 'Дмитрий', date: '21 дек. 2022г.'},
    ]
</script>

<template>
    <Header />
    <div class="home">
        <div class="create-table">
            <div class="container">
                <div class="header">
                    <div class="title">
                        Создать таблицу
                    </div>
                    <div class="actions">
                        <span class="gallery">
                            Галерея шаблонов
                            <AppIcon size="20" icon="mdiSortAscending" />
                        </span>
                        <div class="divider" />
                        <AppIcon size="20" icon="mdiDotsVertical" />
                    </div>
                </div>

                <div class="tables">
                    <div class="table">
                        <router-link to="table" class="table-preview">
                            <AppIcon size="80" icon="mdiPlus" />
                        </router-link>
                        <span>Пустой файл</span>
                    </div>
                    <div
                        v-for="table in tables"
                        :key="table.name"
                        class="table"
                    >
                        <div class="table-preview">
                        </div>
                        <span>{{table.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="previous">
        <div class="container">
            <div class="header">
                <div class="title">
                    Раннее
                </div>
                <div class="actions">
                    <div class="action">
                        Владелец: кто угодно
                        <AppIcon flip="vertical" size="10" icon="mdiTriangle" />
                    </div>
                    <div class="previous__action">
                        По дате просмотра
                    </div>
                    <div class="action">
                        <AppIcon size="20" icon="mdiViewGridOutline" />
                    </div>
                    <div class="action">
                        <AppIcon size="20" icon="mdiSortAlphabeticalVariant" />
                    </div>
                    <div class="action">
                        <AppIcon size="20" icon="mdiFolderOutline" />
                    </div>
                </div>
            </div>

            <div class="previous-tables">
                <div
                    v-for="table in previousTables"
                    :key="table.name"
                    class="previous-table"
                >
                    <AppIcon size="20" icon="mdiTable" />
                    <div class="table-name">
                        {{ table.name }}
                    </div>
                    <div class="table-author">
                        {{ table.author }}
                    </div>
                    <div class="table-date">
                        {{ table.date }}
                    </div>
                    <AppIcon size="20" icon="mdiDotsVertical" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 670px;
    margin: 0 auto;
    padding: 20px 0;
}

.create-table {
    background-color: var(--light-gray);
}

.header {
    display: flex;
    justify-content: space-between;
}

.divider {
    height: 100%;
    width: 1px;
    background-color: var(--light-gray);
}

.actions {
    gap: 15px;
    display: flex;
}

.action {
    display: flex;
    gap: 5px;
}

.gallery {
    gap: 10px;
    display: flex;
}

.tables {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
}

.table-preview {
    width: 155px;
    height: 115px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    background-color: var(--white);
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        border-color: rgba(0,0,0,.35);
    }
}

.previous-tables {
    padding: 20px 0;
}

.previous-table {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
    &:not(:last-child) {
        border-bottom: 1px solid var(--light-gray);
    }
    &:hover {
        background: var(--light-gray);
        border-radius: 5px;
    }
}

.table-name {
    flex: 3;
}

.table-author {
    flex: 1;
}

.table-date,
.table-author {
    opacity: 0.7;
    font-size: var(--font-base);
}
</style>
