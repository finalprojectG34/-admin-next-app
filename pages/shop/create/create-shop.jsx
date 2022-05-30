// material-ui
import {LoadingButton} from '@mui/lab';
import {Box, Dialog, Typography} from '@mui/material';

// project imports
import MainCard from '../../../src/ui-components/cards/MainCard';
import {InputField} from '../../../src/ui-components/input/InputField';
import {useMutation} from "@apollo/client";
import {useEffect, useState} from "react";
import {CREATE_COMPANY} from "../../../src/apollo/mutations/shop_mutations";
import Loader from "../../../src/ui-components/Loader";
import {connect} from "react-redux";
import {createBusiness} from "../../../src/store/create_business/create.utils";
import Compressor from "compressorjs";

// ==============================|| SAMPLE PAGE ||============================== //

const CompanyCreate = (props) => {
  const {
    isCreating,
    created,
    creatingError,
    progress,
    url,
  } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [subCity, setSubCity] = useState("");
  const [addressName, setAddressName] = useState("");
  const [tinNumber, setTinNumber] = useState("");

  const [filePath, setFilePath] = useState(null);
  const [picture, setPicture] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(null);

  const [createCompany, {loading, data, error}] = useMutation(CREATE_COMPANY);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (businessName && locationLocal && phoneNumber && picture && categories) {
    //     setCheckFields(true);
    props.createBusiness({
      picture,
      businessName: "businessName",
    });
    // } else {
    //     setCheckFields(false);
    // }
  };

  const handleFile = (e) => {
    if (e.target.files[0].size >= 1500000) {
      setFileSizeError(true);
    } else {
      setFileSizeError(false);
    }
    if (e.target.files[0] && !fileSizeError) {
      const image = e.target.files[0];
      new Compressor(image, {
        quality: 0.6,
        success: (res) => {
          setPicture(res);
        },
      });
      setFilePath(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    if (created) {
      createCompany({
        variables: {
          "input": {
            "name": name,
            "description": description,
            "ownerID": "6293bb9598be04cb9f7df319",
            "address": {
              "location": {
                "coordinates": [654.545, 864.64554],
                "type": "Point"
              },
              "subCity": subCity,
              "city": city,
              "addressName": addressName
            },
            "tinNumber": tinNumber,
            "image": {
              "images": [url],
              "bgImage": "bgImage",
              "imageCover": picture.name,
              "suffix": picture.type,
              "imagePath": url
            }
          }
        }
      }).then((data) => {
        console.log("==============>", data)
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [created]);

  return (
    <MainCard title='Create Shop'>
      {isCreating && (
        <Dialog open={true}>
          <div className="vw-100 uploading">
            <Loader/>
          </div>
        </Dialog>
      )}
      <form onSubmit={handleSubmit}>
        <Box sx={{margin: 'auto'}} style={{width: 'max-content'}}>
          <InputField
            label='Name'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            dataCy='company-name-input'
          />
          <InputField
            label='Description'
            name='description'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            dataCy='company-description-input'
          />
          <InputField
            label='City'
            name='city'
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            dataCy='company-city-input'
          />
          <InputField
            label='Sub-City'
            name='sub-city'
            placeholder='Sub-City'
            value={subCity}
            onChange={(e) => setSubCity(e.target.value)}
            dataCy='company-sub-city-input'
          />
          <InputField
            label='Street Name'
            name='street-name'
            placeholder='Street Name'
            value={addressName}
            onChange={(e) => setAddressName(e.target.value)}
            dataCy='company-address-name-input'
          />
          <InputField
            label='Tin Number'
            name='tin-number'
            placeholder='Tin Number'
            value={tinNumber}
            onChange={(e) => setTinNumber(e.target.value)}
            dataCy='company-tin-number-input'
          />

          <div className="mb-3 mt-3">
            <img className="w-100" src={filePath} alt=""/>
            <Typography component="p">Upload Picture</Typography>
            <div className="px-3">
              <input type="file" accept=".gif,.jpg,.jpeg,.png" className="" onChange={handleFile}/>
            </div>
          </div>

          <Box textAlign={'center'} mt={2}>
            <LoadingButton
              type='submit'
              variant='contained'
              loading={loading}
              data-cy='create-company-button'
            >
              Create Shop
            </LoadingButton>
          </Box>
        </Box>
      </form>
    </MainCard>
  );
};

const mapStateToProps = (state) => {
  return {
    isCreating: state.create.isCreating,
    created: state.create.created,
    creatingError: state.create.creatingError,
    url: state.create.url,
    progress: state.create.progress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBusiness: (credentials) => dispatch(createBusiness(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCreate);
