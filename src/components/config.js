// 组件基本配置
export const componentConfig = [
  {
    // 自定义配置
    __config__: {
      label: '单行文本',
      labelWidth: null,
      showLabel: true,
      tag: 'el-input',
      tagIcon: 'input',
      defaultValue: undefined,
      required: true,
      layout: 'ColFormItem',
      span: 24,
    },
    // 插槽属性
    __slot__: {
      prepend: '',
      append: ''
    },
    // 组件自身属性
    placeholder: '请输入',
    style: { width: '100%' },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    readonly: false,
    disabled: false
  }
]