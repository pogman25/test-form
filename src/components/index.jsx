import React, {Component} from 'react';
import Select from 'react-select';
import InputMask from 'react-input-mask';
import 'react-select/dist/react-select.css';

const styles = require('./styles.pcss');

export default class FormInput extends Component {
    state = {
        data: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            country: this.props.countries[0],
            occupation: null
        },
        errors: {
            firstName: false,
            lastName: false,
            phoneNumber: false,
            occupation: false
        }
    }

    handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        this.setState( ({data}) => ({
            data: {
                ...data,
                [name]: value
            }
        }))
    }

    handleChangeNumber = ({currentTarget}) => {
        const {name, value} = currentTarget;
        this.setState( ({data}) => ({
            data: {
                ...data,
                [name]: value.replace(/[^\d]/g, '')
            }
        }))
    }

    hadleSelect = (e, name) => {
        this.setState( ({data}) => ({
            data: {
                ...data,
                [name]: e
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {data: {
            firstName, lastName, phoneNumber, country, occupation
        }, errors} = this.state;
        if(!firstName.trim() || !lastName.trim() || phoneNumber.length < 10 || !occupation) {
            this.setState({
                errors: {
                    firstName: !firstName.trim(),
                    lastName: !lastName.trim(),
                    phoneNumber: phoneNumber.length < 10,
                    occupation: !occupation
                }
            })
        } else {
            this.props.postData({
                firstName,
                lastName,
                occupation:occupation.value,
                phoneNumber: `${country.prefix}${phoneNumber}`
            });
            this.setState({
                errors: {
                    firstName: false,
                    lastName: false,
                    phoneNumber: false,
                    occupation: false
                }
            })
        }
    }

    render() {
        const {occupations, countries} = this.props;
        const {data: {
            occupation, firstName, lastName, phoneNumber, country
            }, errors
        } = this.state;
        return (
            <div className={styles.form}>
                <header>
                    <p><strong>Зарегистрируйтесь</strong> и начните продавать<br/>услуги через интернет сегодня</p>
                </header>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <div className={styles.firstForm}>
                        <div className={styles.firstName}>
                            <label htmlFor="">Имя</label>
                            {errors.firstName && <p className={styles.errors}>Обязательно</p>}
                            <input
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={styles.lastName}>
                            <label htmlFor="">Фамилия</label>
                            {errors.lastName && <p className={styles.errors}>Обязательно</p>}
                            <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.occupation}>
                        <label htmlFor="">Профессия</label>
                        {errors.occupation && <p className={styles.errors}>Обязательно</p>}
                        <Select
                            name="occupation"
                            onChange={(e) =>this.hadleSelect(e, "occupation")}
                            options={occupations}
                            value={occupation}
                            clearable={false}
                            placeholder="Выберите профессию"
                        />
                    </div>
                    <div className={styles.phone}>
                        <label>Телефон</label>
                        {errors.phoneNumber && <p className={styles.errors}>Обязательно</p>}
                        <div className={styles.phoneInput}>
                            <div className={styles.flag}>
                                <Select
                                    name="country"
                                    value={country}
                                    placeholder="Country"
                                    clearable={false}
                                    searchable={false}
                                    onChange={(e) =>this.hadleSelect(e, "country")}
                                    options={countries}
                                />
                            </div>
                            <p className={styles.prefix}>{country.prefix}</p>
                            <InputMask
                                className={styles.inputNumbers}
                                mask="999 999-99-99"
                                placeholder="495 123-45-67"
                                type="text"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={this.handleChangeNumber}
                            />
                        </div>
                    </div>
                    <div className={styles.submitBtn}>
                        <input type="submit" value="Зарегистрироваться"/>
                    </div>
                </form>
            </div>
        )
    }
}