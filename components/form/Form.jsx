// import { Field, Formik, Form as FormikForm } from "formik";
import clsx from "clsx";
import { Field, Formik, Form } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required field"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const initialValues = {
    name: "",
    email: "",
    password: "",
};
export const MyForm = () => {
    function handleSubmit(values, { setSubmitting, resetForm }) {
        // setSubmitting(true);
        console.log(values);
    }

    return (
        <div>
            <h3>Formik</h3>
            <Formik 
                initialValues={initialValues}
                
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ touched, values, errors }) => {
                    // console.log(touched);
                    console.log(errors);
                    
                    return (
                    <Form>
                        <Field
                            name="name"
                            id="name"
                            // type="name"
                            // placeholder="Name"
                        >
                            {({field, meta}) => (
                                <input 
                                    {...field}
                                    type="name" 
                                    placeholder="Name"
                                    // style={touched.name && !errors.name && {border: '2px solid red'}}/>
                                    className={clsx(
                                        'input-name',
                                        touched.name && !errors.name && 'success',
                                        errors.name && 'error'
                                    )}
                                />
                            )}
                        </Field>
                        <Field
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                        <Field
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                        <button type="submit">Submit</button>
                    </Form>
                )}}
            </Formik>
        </div>
    );
};