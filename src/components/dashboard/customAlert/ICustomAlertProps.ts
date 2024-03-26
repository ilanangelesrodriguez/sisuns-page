export interface CustomAlertProps {
    message: string;
    type: 'success' | 'error';
    show: boolean;
    onClose: () => void;
}