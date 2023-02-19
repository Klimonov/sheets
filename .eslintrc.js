module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
    ],
    plugins: [
        'import-newlines',
    ],
    rules: {
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false,
        }],
        camelcase: 'warn',
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        curly: ['error', 'all'],
        'default-case': 'off',
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        'max-len': 'off',
        'no-console': 'error',
        'no-plusplus': 'off',
        'no-restricted-imports': ['error', {
            paths: [
                {
                    name: 'consola',
                    message: 'Please use "winston" instead',
                },
            ],
            patterns: [
                {
                    group: ['.*'],
                    message: 'Relative import is not allowed, use aliases'
                },
            ],
        }],
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement',
            'Literal[value="null"]',
            // 'BinaryExpression[operator="in"]',
        ],
        'no-script-url': 'warn',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'warn',
        'no-underscore-dangle': ['error', {
            allow: ['_uid', '__NUXT__', '__webpack_public_path__', '_app'],
            allowAfterSuper: false,
            allowAfterThis: false,
            allowAfterThisConstructor: false,
            allowFunctionParams: false,
            enforceInMethodNames: false,
        }],
        'no-param-reassign': [2, {
            props: false,
        }],
        'no-useless-concat': 'off',
        'no-unused-vars': 'off',
        'object-curly-spacing': ['error', 'never'],
        'object-shorthand': ['error', 'always', {
            avoidQuotes: false,
        }],
        'padding-line-between-statements': 'off',
        'prefer-template': 'off',
        'sort-imports': ['error', {
            'ignoreDeclarationSort': true,
        }],
        /** Описание внутри Symbol попадает в prod сборку */
        'symbol-description': 'off',

        'node/no-callback-literal': 'off',

        'import/dynamic-import-chunkname': ['error', {
            importFunctions: ['dynamicImport'],
            webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
        }],
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            json: 'never',
            jsx: 'never',
            mjs: 'never',
            ts: 'never',
            tsx: 'never',
        }],
        'import/no-dynamic-require': 'off',
        'import/prefer-default-export': 'off',

        'import-newlines/enforce': ['error', {
            items: 2,
            'max-len': 1000,
            semi: true,
        }],

        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/attributes-order': ['error', {
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'EVENTS',
                'OTHER_ATTR',
                'CONTENT',
            ],
        }],
        'vue/block-lang': ['warn', {
            script: {
                lang: 'ts',
            },
        }],
        'vue/component-definition-name-casing': 'off',
        'vue/first-attribute-linebreak': ['error', {
            singleline: 'beside',
            multiline: 'below',
        }],
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': ['error', {
            html: {
                component: 'always',
                normal: 'never',
                void: 'never',
            },
            math: 'always',
            svg: 'always',
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: 1,
        }],
        'vue/multi-word-component-names': 'warn',
        'vue/no-reserved-component-names': ['error', {
            disallowVueBuiltInComponents: true,
            disallowVue3BuiltInComponents: true,
        }],
        'vue/require-name-property': 'error',
        'vue/match-component-file-name': ['error', {
            extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
            shouldMatchCase: true,
        }],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],

        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'none',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: false,
            },
            multilineDetection: 'brackets',
        }],
        // @todo Добавить правила именования
        // '@typescript-eslint/naming-convention': [
        //     'warn',
        //     {
        //         selector: 'default',
        //         format: ['camelCase'],
        //     },
        //     {
        //         selector: 'variable',
        //         modifiers: ['const'],
        //         format: ['camelCase', 'UPPER_CASE'],
        //     },
        //     {
        //         selector: 'variable',
        //         types: ['boolean'],
        //         format: ['PascalCase'],
        //         prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        //     },
        //     {
        //         selector: 'typeLike',
        //         format: ['PascalCase'],
        //     },
        //     {
        //         selector: 'interface',
        //         format: ['PascalCase'],
        //         custom: {
        //             regex: '^I[A-Z]',
        //             match: false,
        //         },
        //     },
        //     {
        //         selector: 'enumMember',
        //         format: ['UPPER_CASE'],
        //     },
        // ],
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: ['interface', 'type'],
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var', 'type'],
                next: ['const', 'let', 'var', 'type'],
            },
        ],
        '@typescript-eslint/space-infix-ops': ['error', {
            int32Hint: false,
        }],
        '@typescript-eslint/type-annotation-spacing': ['error', {
            before: false,
            after: true,
            overrides: {
                arrow: {
                    before: true,
                    after: true,
                },
            },
        }],
    },
    overrides: [
        {
            files: ['*.ts', '*.mts', '*.cts', '*.tsx', '*.vue'],
            rules: {
                'no-undef': 'off',
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error', { typedefs: false }],
            },
        },
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
                'no-restricted-syntax': [
                    'error',
                    'ForInStatement',
                    'LabeledStatement',
                    'WithStatement',
                    'Literal[value="null"]',
                    // 'BinaryExpression[operator="in"]',
                    {
                        selector: 'ExportDefaultDeclaration > :not(CallExpression[callee.name="defineComponent"])',
                        message: 'Declare a component with "defineComponent"',
                    },
                ],
                // @todo Раскомментировать при использовании <script setup>
                // 'import/first': 'off',
                // 'import/no-duplicates': 'off',
                // 'no-duplicate-imports': 'off',
                // '@typescript-eslint/no-duplicate-imports': 'off',
            },
        },
    ],
    settings: {
        'import/core-modules': ['vue', 'vuex', 'vue-router'],
        'import/resolver': {
            webpack: {
                config: require.resolve('./build/aliasPaths.js'),
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    globals: {
        __webpack_public_path__: true,
        globalThis: true,
        google: true,
    },
    ignorePatterns: [
        '/*.js',
        'build/**/*.js',
        'cli/**/*.js',
        'server/**/*.js',
        'tests/**/*.js',
    ],
};
