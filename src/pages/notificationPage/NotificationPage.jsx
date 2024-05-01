import React from 'react';
import styles from "./Notification.module.css"


const NotificationPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textNotification}>
                Уведомления
            </div>
            <div className={styles.notificationCatalog}>
                <div className={styles.notification}>
                    <h3>Внимание</h3>
                    <p>Пожалуйста подтвердите свой email, чтобы подтвердить аккаунт</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;