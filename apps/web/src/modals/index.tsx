import {Snackbar, SnackbarProps} from '@vkontakte/vkui'
import {Icon28InfoCircleOutline} from '@vkontakte/icons'
import {CSSProperties, ReactNode} from 'preact/compat'
import {useCallback, useState} from 'preact/hooks'

/**
 * Функция 'useSnackbar' управляет отображением Snackbar'а для уведомлений.
 * Предоставляет метод 'showSnackbar', который позволяет отображать уведомления на основе переданных данных.
 * Возвращает состояние 'snackbar', отображающее текущий Snackbar, и функцию 'showSnackbar' для управления им.
 * 'showSnackbar' принимает 'snackbarData' (данные для Snackbar) и отображает Snackbar с соответствующими свойствами.
 * Если передан null в качестве 'snackbarData', закрывает Snackbar, в противном случае отображает новый Snackbar с заданными данными.
 */

export interface SnackbarData {
  layout?: SnackbarProps['layout']
  icon?: ReactNode
  action?: string
  onActionClick?: () => void
  onClose?: () => void
  duration?: number
  style?: CSSProperties
  title: string
  subtitle?: string
}

const useSnackbar = (): [
    ReactNode | null,
  (snackbarData: SnackbarData | null) => void,
] => {
  const [snackbar, setSnackbar] = useState<ReactNode | null>(null)

  const showSnackbar = useCallback((snackbarData: SnackbarData | null) => {
    if (!snackbarData) {
      setSnackbar(null)
      return null
    }

    const {layout, action, onActionClick, duration, onClose, subtitle, style, title, icon} = snackbarData

    setSnackbar(
      <Snackbar
        layout={layout || 'vertical'}
        onClose={() => {
          setSnackbar(null)

          if (onClose) {
            onClose()
          }
        }}
        before={
          icon || (
            <Icon28InfoCircleOutline fill="var(--vkui--color_background_accent)"/>
          )
        }
        action={action}
        onActionClick={onActionClick}
        duration={duration}
        style={style}
        subtitle={subtitle}
      >
        {title}
      </Snackbar>
    )

    return null
  }, [])

  return [snackbar, showSnackbar]
}

export default useSnackbar
